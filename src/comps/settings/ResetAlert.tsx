import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { FC, useRef } from "react";

interface ResetAlertProps {
  isOpen: boolean;
  onClose: () => void;
  resetProgress: () => void;
}

const ResetAlert: FC<ResetAlertProps> = ({
  isOpen,
  onClose,
  resetProgress,
}) => {
  const cancelRef = useRef<HTMLButtonElement | null>(null);
  const resetAndClose = () => {
    resetProgress();
    onClose();
  }
  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>Reset Warning</AlertDialogHeader>
          <AlertDialogBody>
            This action is irreversible. Do You really want to reset all Your
            progress?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={resetAndClose} mr="1">Reset</Button>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default ResetAlert;
