import { Flex } from '@chakra-ui/react'
import {FC} from 'react'
import { upgrades } from '../../upgrades/upgrades'
import UpgradeItem from './UpgradeItem'

const Upgrades:FC = () => {
  return (
    <Flex wrap="wrap" gap="20px">
      {upgrades.map(upgrade=>
        <UpgradeItem key={upgrade.name} {...upgrade}  />
      )}
    </Flex>
  )
}

export default Upgrades