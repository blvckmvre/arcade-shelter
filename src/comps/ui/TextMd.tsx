import { Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

const TextMd: FC<{ children: ReactNode; color?: string }> = ({
  children,
  color,
}) => {
  return (
    <Text color={color} fontSize="1.3rem">
      {children}
    </Text>
  );
};

export default TextMd;
