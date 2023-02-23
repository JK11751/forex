import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
    Box,
    Text,
    Flex,
    Heading,
    VStack,
    Divider
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Referral = () => {
  return (
    <Box bg="white" boxShadow={'sm'} p={4}>
    <VStack align={'flex-start'}>
    <Heading fontSize={'md'} >Referrals</Heading>
    <Divider/>
    <Flex>
   
                <Text spacing={4}>Referral Link:</Text>
                <Link color={'blue.500'}>globaltradeslimited.com?ref=mic

</Link>

              </Flex>
              <Divider/>
              </VStack>
    <TableContainer bg="white">
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th>SN</Th>
        <Th>Name</Th>
        <Th isNumeric>Reg. Date</Th>
      </Tr>
    </Thead>
    <Tbody>
    </Tbody>
  </Table>
</TableContainer>
</Box>
  )
}

export default Referral
