import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import { IAchievement } from "../../types/achievements";
import AchievementItem from "./AchievementItem";
import TextMd from "../ui/TextMd";

const AchievementsBlock: FC<{ block: IAchievement[], title: string }> = ({ block, title }) => {
  return (
    <Flex direction="column" gap="20px">
    <TextMd color="whitesmoke">{title}</TextMd>
    <Flex wrap="wrap" gap="20px">
      {block.map((achievement) => (
        <AchievementItem key={achievement.name} {...achievement} />
      ))}
    </Flex>
    </Flex>
  );
};

export default AchievementsBlock;
