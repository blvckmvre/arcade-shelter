import { useTypeSelector } from "../../redux/useTypeSelector";
import { getCoinClickAchievements } from "../../../achievements/coin-click";
import { getCoinCountAchievements } from "../../../achievements/coin-count";
import { getCoinSecondAchievements } from "../../../achievements/coin-second";
import { getUpgradesAchievements } from "../../../achievements/upgrades";

export const useGetAchievements = () => {
  const {coins,perClick,perSecond,upgrades} = useTypeSelector(state=>state.coins)
  return {
    "Coin Count": getCoinCountAchievements(coins),
    "Coin Clicks": getCoinClickAchievements(perClick),
    "Passive Income": getCoinSecondAchievements(perSecond),
    "Upgrades": getUpgradesAchievements(upgrades)
  }
}