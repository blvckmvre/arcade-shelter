import { useTypeSelector } from "../redux/useTypeSelector";

export const useProgress = () => {
  const { coins } = useTypeSelector((state) => state);
  return {
    ...coins,
  };
};
