import React from 'react'
import { Box, Divider, VStack,Text,FormControl, Select,Input,   FormLabel, Button, } from '@chakra-ui/react';
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react';


const Withdrawal = () => {
  return (
   <Box boxShadow={'md'} borderWidth={'1px'} m={4} >
   <VStack alignItems={'flex-start'} p={4}>
   <Text fontSize={'2xl'} fontWeight={'normal'} >Request Withdrawal</Text>
   <Divider/>
   <Text fontSize={'xl'}  pt={4}>Withdrawable Amount</Text>
   <Box  pt={4}>
              <FormControl id="Amount" isRequired >
                <FormLabel>Amount [USD]</FormLabel>
                <NumberInput defaultValue={0}>
                  <NumberInputField width={'76vw'} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Box>
            <Box pt={10}>
              <FormControl id="preferredmethod" isRequired >
                <FormLabel>Select Preferred Withdrawal Method </FormLabel>
                <Select placeholder="Select Preferred Withdrawal Method " width={'76vw'}>
                  <option value="option2">Bitcoin</option>
                  <option value="option3">Ethereum</option>
                  <option value="option4">Perfect Money</option>
                  <option value="option5">USDT</option>
                  <option value="option6">REINVESTMENT</option>
                </Select>
              </FormControl>
            </Box>
            <Box pt={10}>
              <FormControl id="preferredmethod" isRequired pb={4}>
                <FormLabel>USDT Wallet Address</FormLabel>
                <Input
                width={'76vw'}
                placeholder={'Enter Wallet Address'}
                mr={2}
              />
              </FormControl>
            </Box>
            <Button alignSelf={'flex-end'} colorScheme={"blue"}>Request Withdrawal</Button>


   </VStack>


   </Box>
  )
}

export default Withdrawal
