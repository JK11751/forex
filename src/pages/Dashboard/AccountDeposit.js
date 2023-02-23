import {
  Box,
  Divider,
  Text,
  HStack,
  useClipboard,
  Flex,
  Input,
  Button,
  VStack,
  FormControl,
  Select,
  FormLabel,
  Spacer,
} from '@chakra-ui/react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import React from 'react';

const AccountDeposit = () => {
  const { onCopy, value, setValue, hasCopied } = useClipboard('');
  
  return (
    <Box >
      <HStack >
        <Box boxShadow={'lg'} borderWidth={'1px'} height={'100vh'} p={2} borderRadius={15} bg={"white"}>
          <VStack>
          <Box alignSelf={"flex-start"}>
            <Text fontSize={"2xl"} >Deposit funds </Text>
            </Box>
            <Divider />
            <Text pt={8} fontSize={'md'}>Bitcoin Wallet Address</Text>
            <Divider/>
            
            <Flex >
              <Input
                placeholder={'16NEEtG72njBTPPYjS5W8x9d4HaFEvM3oV'}
                width={'500px'}
                value={value}
                onChange={e => {
                  setValue(e.target.value);
                }}
                mr={2}
              />
              <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
            </Flex>
            <Divider />
            <Text pt={4}>Ethereum Wallet Address</Text>
            <Flex mb={2}>
              <Input
                placeholder={'16NEEtG72njBTPPYjS5W8x9d4HaFEvM3oV'}
                width={'500px'}
                value={value}
                onChange={e => {
                  setValue(e.target.value);
                }}
                mr={2}
              />
              <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
            </Flex>
            <Divider/>
            <Text  pt={4}>Perfect Money Wallet Address</Text>
            <Divider />
            <Flex mb={2}>
              <Input
                placeholder={'16NEEtG72njBTPPYjS5W8x9d4HaFEvM3oV'}
                width={'500px'}
                value={value}
                onChange={e => {
                  setValue(e.target.value);
                }}
                mr={2}
              />
              <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
            </Flex>
            <Divider />
            <Text  pt={4}>USDT Wallet Address</Text>
            <Divider />
            <Flex mb={2}>
              <Input
                width={'500px'}
                placeholder={'16NEEtG72njBTPPYjS5W8x9d4HaFEvM3oV'}
                value={value}
                onChange={e => {
                  setValue(e.target.value);
                }}
                mr={2}
              />
              <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
            </Flex>
            <Divider />
          </VStack>
        </Box>
        <Spacer />
        <Box  boxShadow={'lg'} borderWidth={'1px'} height={'100vh'} p={2} borderRadius={15} bg={"white"} >
          <VStack>
            <Text alignSelf={'flex-start'} fontSize={"2xl"} > Deposit Funds</Text>
            <Divider/>
            <Box pt={10}>
              <FormControl id="preferredmethod" isRequired pb={4}>
                <FormLabel>Preferred Method</FormLabel>
                <Select placeholder="Select Preferred Method" width={'500px'}>
                  <option value="option2">Bitcoin</option>
                  <option value="option3">Ethereum</option>
                  <option value="option4">Perfect Money</option>
                  <option value="option5">USDT</option>
                  <option value="option6">REINVESTMENT</option>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl id="investmentplan" isRequired pb={4}>
                <FormLabel>Investment Plan</FormLabel>
                <Select placeholder="Select option" width={'500px'}>
                  <option value="option1">Select Preferred Method</option>
                  <option value="option2">Bitcoin</option>
                  <option value="option3">Ethereum</option>
                  <option value="option3">Perfect Money</option>
                  <option value="option3">USDT</option>
                  <option value="option3">REINVESTMENT</option>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl id="Amount" isRequired pb={4}>
                <FormLabel>Amount [USD]</FormLabel>
                <NumberInput defaultValue={0}>
                  <NumberInputField width={'500px'} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Box>
            <Button  alignSelf={'flex-end'} colorScheme={"blue"}>Deposit</Button>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default AccountDeposit;
