import { useEffect } from "react";
import { coinsSlice } from "../../store/slices/coins-slice";
import { useTypeDispatch } from "../redux/useTypeDispatch";

export const useLoadProgress = () => {
  const d = useTypeDispatch();
  const { restoreSaveData } = coinsSlice.actions;
  return useEffect(() => {
    const saveString = localStorage.getItem("save");
    if (saveString) {
      const saveObject = JSON.parse(saveString);
      d(restoreSaveData(saveObject));
    }
  }, []);
};
