import { useTypeSelector } from "../../redux/useTypeSelector";
import { useTypeDispatch } from "../../redux/useTypeDispatch";
import { useAnnounce } from "../useAnnounce";
import { useGetAchievements } from "./useGetAchievements";
import { coinsSlice } from "../../../store/slices/coins-slice";
import { useEffect } from "react";
import sound from "../../../assets/achievement.mp3"

export const useAchievements = (
  type: keyof ReturnType<typeof useGetAchievements>,
  value: number | {name: string, count: number}[]
) => {
  const { achievements } = useTypeSelector((state) => state.coins);
  const audio = new Audio(sound);
  const announce = useAnnounce();
  const allAchievements = useGetAchievements();
  const d = useTypeDispatch();
  const { claimAchievement } = coinsSlice.actions;
  return useEffect(() => {
    const gotten = allAchievements[type].filter(
      (achievement) =>
        !achievements.includes(achievement.name) && achievement.condition
    );
    if (gotten.length) {
      gotten.forEach((achievement) => {
        d(claimAchievement(achievement.name));
        announce(
          `Achievement: "${achievement.name}"`,
          achievement.description,
          "achievement"
        );
        audio.currentTime = 0;
        audio.play();
      });
    }
  }, [value]);
};
