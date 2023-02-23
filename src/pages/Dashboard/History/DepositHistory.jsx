import React from 'react'
import {Box,Input,FormControl,FormLabel, Button,Heading, Divider, VStack,Text,Spacer,Flex} from "@chakra-ui/react";
const DepositHistory= () => {
  return (
    <Box bg={'white'} p={4}>
    <VStack pb={2} align={'flex-start'}>
    <Heading fontSize={'md'} pb={2}>Deposit History</Heading>
    <Divider/>
    </VStack>
    <FormControl isRequired pb={2}>
  <FormLabel>Start Date</FormLabel>
  <Input
 placeholder="Select Date and Time"
 size="md"
 type="datetime-local"
/>
</FormControl>
<FormControl isRequired pb={4}>
  <FormLabel>End Date</FormLabel>
  <Input
 placeholder="Select Date and Time"
 size="md"
 type="datetime-local"
/>
</FormControl>
     <Button colorScheme={"blue"} textColor={'white'}>SEARCH RECORDS</Button>
     <Divider pt={20}/>
     <Flex align={'flex-start'} >
        <Text>ID</Text>
        <Spacer/>
        <Text>Date/Time</Text>
        <Spacer/>
        <Text>Amount</Text>
        <Spacer/>
     </Flex>


    </Box>
  )
}

export default DepositHistory

