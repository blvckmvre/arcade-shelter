import { Flex } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

const ItemContainer: FC<{ children: ReactNode; color?: string }> = ({
  children,
  color,
}) => {
  return (
    <Flex
      p="1"
      direction="column"
      textAlign="center"
      gap="1"
      border="1px"
      w={200}
      h={200}
      _hover={{ boxShadow: "0 0 10px 0 white", transform: "scale(0.95)" }}
      transition="0.1s"
      cursor="default"
      userSelect="none"
      color={color}
    >
      {children}
    </Flex>
  );
};

export default ItemContainer;
