import { React} from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading } from '@chakra-ui/react';
import { RiLuggageDepositLine} from 'react-icons/ri';
import { MdManageAccounts } from 'react-icons/md';
import { BiMoneyWithdraw } from 'react-icons/bi';


const Feature = ({ title, text, icon }) => {
  return (
    <Stack maxWidth={300} pl={10} mb={60} >
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'#fe6600'}
        mb={1}>
        {icon}
      </Flex>
      
      <Text fontWeight={700} fontFamily={'sans-serif'} lineHeight={'40px'} fontSize={'28px'}  >{title}</Text>
      <Text fontWeight={400} fontFamily={'sans-serif'} lineHeight={'28px'} fontSize={'15px'} color={'#3b3b3b'}>{text}</Text>

    </Stack>
  );
};

const HowItWorks=()=> {
  return (
    <Box pl={20} pt={20} >
    <Heading lineHeight={1.42} fontFamily={"sans-serif"} fontSize={'50px'} fontWeight={700} pb={4} color={'#2d2d2d'} >How It Works</Heading>
      <SimpleGrid columns={3 } spacing={10}>
        <Feature
          icon={<Icon as={MdManageAccounts} w={10} h={10} />}
          title={'CREATE YOUR ACCOUNT'}
          text={
            'Register a free account and start your first step to passive income.'
          }
        />
        <Feature
          icon={<Icon as={RiLuggageDepositLine} w={10} h={10} />}
          title={'MAKE YOUR DEPOSIT'}
          text={
            'Invest your preferred amount and get a stable daily income.'
          }
        />
        <Feature
          icon={<Icon as={BiMoneyWithdraw} w={10} h={10} />}
          title={'WITHDRAW PROFITS'}
          text={
            'Withdraw your earnings whenever it is due'
          }
        />
      </SimpleGrid>
    </Box>
  );
}
export default HowItWorks;