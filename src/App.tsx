import { Accordion, Box } from "@chakra-ui/react";
import { FC, useEffect, useRef } from "react";
import GameWindow from "./comps/main/GameWindow";
import Settings from "./comps/settings/Settings";
import AccordionElement from "./comps/ui/AccordionElement";
import Upgrades from "./comps/upgrades/Upgrades";
import { useTypeSelector } from "./hooks/redux/useTypeSelector";
import Achievements from "./comps/achievements/Achievements";
import { useAchievements } from "./hooks/game/achievements/useAchievements";
import { useLoadProgress } from "./hooks/game/useLoadProgress";
import { usePassiveIncome } from "./hooks/game/usePassiveIncome";
import { betterNum } from "./utils/betterNum";

const App: FC = () => {
  const incomeTimer = useRef<NodeJS.Timer | null>(null);

  const { perSecond, coins, perClick, upgrades } = useTypeSelector(
    (state) => state.coins
  );

  useLoadProgress();

  usePassiveIncome(incomeTimer);

  useAchievements("Coin Clicks", perClick);
  useAchievements("Coin Count", coins);
  useAchievements("Passive Income", perSecond);
  useAchievements("Upgrades", upgrades);

  const unloadAlert = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = "";
    return "";
  };

  useEffect(() => {
    window.addEventListener("beforeunload", unloadAlert);
    return () => window.removeEventListener("beforeunload", unloadAlert);
  }, []);

  useEffect(() => {
    document.title = "Arcade Shelter – " + betterNum(coins) + " coins";
  }, [coins]);

  return (
    <Box color="#FFBF00">
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionElement head="Arcade Shelter" element={<GameWindow />} />
        <AccordionElement head="Upgrade Shop" element={<Upgrades />} />
        <AccordionElement
          head="Settings"
          element={<Settings timer={incomeTimer} />}
        />
        <AccordionElement head="Achievements" element={<Achievements />} />
      </Accordion>
    </Box>
  );
};

export default App;
