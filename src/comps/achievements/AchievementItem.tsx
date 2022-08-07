import { FC } from "react";
import { useTypeSelector } from "../../hooks/redux/useTypeSelector";
import { IAchievement } from "../../types/achievements";
import ItemContainer from "../ui/ItemContainer";
import TextMd from "../ui/TextMd";
import TextXs from "../ui/TextXs";

const AchievementItem: FC<IAchievement> = (achievement) => {
  const { achievements } = useTypeSelector((state) => state.coins);
  return (
    <ItemContainer
      color={achievements.includes(achievement.name) ? "inherit" : "whitesmoke"}
    >
      <TextMd>{achievement.name}</TextMd>
      <TextXs>{achievement.description}</TextXs>
    </ItemContainer>
  );
};

export default AchievementItem;
