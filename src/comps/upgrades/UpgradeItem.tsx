import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { useTypeDispatch } from "../../hooks/redux/useTypeDispatch";
import { useTypeSelector } from "../../hooks/redux/useTypeSelector";
import { coinsSlice } from "../../store/slices/coins-slice";
import { IUpgrade } from "../../types/upgrades";
import { betterNum } from "../../utils/betterNum";
import ItemContainer from "../ui/ItemContainer";
import TextMd from "../ui/TextMd";
import TextSm from "../ui/TextSm";
import TextXs from "../ui/TextXs";

const UpgradeItem: FC<IUpgrade> = (upgrade) => {
  const d = useTypeDispatch();
  const { claimUpgrade } = coinsSlice.actions;
  const { coins, upgrades } = useTypeSelector((state) => state.coins);
  const buyUpgrade = (count: number) => {
    if (coins >= upgrade.cost * count)
      for (let i = 0; i < count; i++) {
        d(claimUpgrade(upgrade));
      }
  };
  return (
   <ItemContainer>
      <TextMd>{upgrade.name}</TextMd>
      <TextXs color="palegreen">{upgrade.description}</TextXs>
      <TextXs color="coral">Cost: {betterNum(upgrade.cost)} coins</TextXs>
      <TextXs>
        {betterNum(upgrades.find((u) => u.name === upgrade.name)?.count ?? 0)}{" "}
        owned
      </TextXs>
      <Flex gap="5px" justify="center" h="100%" align="end">
        <ButtonGroup size="md" isAttached variant="solid">
          <Button onClick={() => buyUpgrade(1)}>1</Button>
          <Button onClick={() => buyUpgrade(10)}>10</Button>
          <Button onClick={() => buyUpgrade(100)}>100</Button>
        </ButtonGroup>
      </Flex>
    </ItemContainer>
  );
};

export default UpgradeItem;
