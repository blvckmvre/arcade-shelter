import arcade_coin from "../../assets/arcade_coin.png";
import { Image } from '@chakra-ui/react'
import {FC} from 'react'
import { useTypeDispatch } from "../../hooks/redux/useTypeDispatch";
import { coinsSlice } from "../../store/slices/coins-slice";

const ClickableCoin:FC = () => {
  const d = useTypeDispatch();
  const {earnClickCoins} = coinsSlice.actions;
  return (
    <Image
        mt="7"
        width={200}
        draggable={false}
        rounded="full"
        src={arcade_coin}
        alt=""
        shadow="0 0 30px 2px white"
        _hover={{transform: "scale(0.95)"}}
        transition="0.1s"
        onClick={()=>d(earnClickCoins())}
        _active={{transform: "scale(1.02)"}}
        userSelect="none"
      />
  )
}

export default ClickableCoin