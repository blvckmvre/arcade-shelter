import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import { useGetAchievements } from "../../hooks/game/achievements/useGetAchievements";
import AchievementsBlock from "./AchievementsBlock";

const Achievements: FC = () => {
  const allAchievements = useGetAchievements();
  return (
    <Flex direction="column" gap="50px">
      {Object.keys(allAchievements).map((block) => (
        <AchievementsBlock
          block={allAchievements[block as keyof typeof allAchievements]}
          title={block}
          key={block}
        />
      ))}
    </Flex>
  );
};

export default Achievements;
