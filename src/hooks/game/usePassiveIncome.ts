import { MutableRefObject, useEffect } from "react";
import { coinsSlice } from "../../store/slices/coins-slice";
import { useTypeDispatch } from "../redux/useTypeDispatch";
import { useTypeSelector } from "../redux/useTypeSelector";

export const usePassiveIncome = (
  timer: MutableRefObject<NodeJS.Timer | null>
) => {
  const { perSecond } = useTypeSelector((state) => state.coins);
  const d = useTypeDispatch();
  const { earnPassive } = coinsSlice.actions;
  return useEffect(() => {
    if (perSecond && !timer.current) {
      timer.current = setInterval(() => {
        d(earnPassive());
      }, 1000);
    }
  }, [perSecond]);
};
