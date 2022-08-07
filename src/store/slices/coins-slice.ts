import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUpgrade } from "../../types/upgrades";

interface ICoinsState {
  coins: number;
  perClick: number;
  perSecond: number;
  upgrades: { name: string; count: number }[];
  achievements: string[];
}

const initialState: ICoinsState = {
  coins: 0,
  perClick: 1,
  perSecond: 0,
  upgrades: [],
  achievements: [],
};

export const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    earnClickCoins: (state) => {
      state.coins += state.perClick;
    },
    earnPassive: (state) => {
      state.coins += state.perSecond;
    },
    claimUpgrade: (state, action: PayloadAction<IUpgrade>) => {
      state.coins -= action.payload.cost;
      if (action.payload.type === "click")
        state.perClick += action.payload.value;
      else state.perSecond += action.payload.value;
      const foundUpgrade = state.upgrades.find(
        (upgrade) => upgrade.name === action.payload.name
      );
      if (foundUpgrade) foundUpgrade.count++;
      else state.upgrades.push({ name: action.payload.name, count: 1 });
    },
    claimAchievement: (state, action: PayloadAction<string>) => {
      state.achievements.push(action.payload);
    },
    restoreSaveData: (_, action: PayloadAction<ICoinsState>) => {
      return action.payload;
    },
    clearProgress: () => {
      return initialState;
    },
  },
});
