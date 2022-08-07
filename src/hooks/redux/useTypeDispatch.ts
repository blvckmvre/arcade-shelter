import { useDispatch } from "react-redux";
import { DispatchType } from "../../store/store";

export const useTypeDispatch = () => useDispatch<DispatchType>()