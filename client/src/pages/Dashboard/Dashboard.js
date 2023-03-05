import React from 'react'
import { SimpleGrid} from '@chakra-ui/react'
import {data} from '../../constants/CardList'
import DashCard from '../../Cards/DashCard'
import Exchanges from '../../components/Currency/Exchanges'



const Dashboard = () => {
  return (
    <>
    <SimpleGrid columns={[1, 2, 3]} spacing="20px" m={4}>
      {data.map(content => {
        return <DashCard key={content.id} {...content} />;
      })}
    </SimpleGrid>
    <Exchanges/>
  </>
  )
}

export default Dashboard
