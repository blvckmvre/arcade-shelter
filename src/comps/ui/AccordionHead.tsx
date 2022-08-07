import { AccordionButton } from '@chakra-ui/react'
import {FC, ReactNode} from 'react'

const AccordionHead:FC<{children: ReactNode}> = ({children}) => {
  return (
    <AccordionButton _hover={{background: "rgba(255,255,255,0.1)"}}>{children}</AccordionButton>
  )
}

export default AccordionHead