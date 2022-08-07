import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useTypeSelector } from "../../hooks/redux/useTypeSelector";
import { betterNum } from "../../utils/betterNum";
import ClickableCoin from "./ClickableCoin";

const GameWindow: FC = () => {
  const { coins, perClick, perSecond } = useTypeSelector(
    (state) => state.coins
  );
  // const transformNum = (num: number) => {
  //   return num.toLocaleString('en-US');
  // };
  return (
    <Flex direction="column" gap="32px" align="center" w="200px" mx="auto">
      <ClickableCoin />
      <Flex direction="column" w="full" whiteSpace="nowrap">
        <Text borderLeft="1px" px="2">
          {betterNum(perClick)} c/click
        </Text>
        <Text borderLeft="1px" px="2">
          {betterNum(perSecond)} c/s
        </Text>
      </Flex>
      <Text whiteSpace="nowrap" fontSize="2rem">
        {betterNum(coins)} coins
      </Text>
    </Flex>
  );
};

export default GameWindow;
