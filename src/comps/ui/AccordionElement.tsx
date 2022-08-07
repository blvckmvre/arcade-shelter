import { AccordionItem, AccordionPanel } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import AccordionHead from "./AccordionHead";

interface AccordionElementProps {
  head: string;
  element: ReactNode;
}

const AccordionElement: FC<AccordionElementProps> = ({ head, element }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionHead>{head}</AccordionHead>
      </h2>
      <AccordionPanel>{element}</AccordionPanel>
    </AccordionItem>
  );
};

export default AccordionElement;
