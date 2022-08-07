import { Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

const TextSm: FC<{ children: ReactNode; color?: string }> = ({
  children,
  color,
}) => {
  return (
    <Text color={color} fontSize="0.9rem">
      {children}
    </Text>
  );
};

export default TextSm;
