import { Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

const TextXs: FC<{ children: ReactNode; color?: string }> = ({
  children,
  color,
}) => {
  return (
    <Text color={color} fontSize="0.8rem">
      {children}
    </Text>
  );
};

export default TextXs;
