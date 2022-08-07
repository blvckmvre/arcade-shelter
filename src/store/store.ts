import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { coinsSlice } from "./slices/coins-slice";

const rootReducer = combineReducers({
  [coinsSlice.name]: coinsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type DispatchType = typeof store.dispatch;