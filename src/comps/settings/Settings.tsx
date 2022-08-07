import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import { FC, MutableRefObject } from "react";
import { useAnnounce } from "../../hooks/game/useAnnounce";
import { useProgress } from "../../hooks/game/useProgress";
import { useTypeDispatch } from "../../hooks/redux/useTypeDispatch";
import { coinsSlice } from "../../store/slices/coins-slice";
import ResetAlert from "./ResetAlert";

const Settings: FC<{ timer: MutableRefObject<NodeJS.Timer | null> }> = ({
  timer,
}) => {
  const progress = useProgress();
  const d = useTypeDispatch();
  const announce = useAnnounce();
  const { clearProgress } = coinsSlice.actions;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const saveProgress = () => {
    localStorage.setItem("save", JSON.stringify(progress));
    announce("Progress saved", "", "save");
  };
  const resetProgress = () => {
    localStorage.removeItem("save");
    d(clearProgress());
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };
  return (
    <Flex direction="column" gap="4">
      <Button width={100} colorScheme="teal" onClick={saveProgress}>
        Save
      </Button>
      <Button width={100} colorScheme="orange" onClick={onOpen}>
        Reset
      </Button>
      <ResetAlert
        isOpen={isOpen}
        onClose={onClose}
        resetProgress={resetProgress}
      />
    </Flex>
  );
};

export default Settings;
