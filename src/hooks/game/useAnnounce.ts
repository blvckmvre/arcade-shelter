import { useToast } from "@chakra-ui/react";

type ToastType = "achievement" | "save";

export const useAnnounce = () =>  {
  const toast = useToast();
  return (title: string, desc: string, type: ToastType) => toast({
    variant: "subtle",
    title: title,
    description: desc,
    duration: 2000,
    isClosable: true,
    status: type === "save" ? "success" : "info",
  });
};
