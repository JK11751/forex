import { React} from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';


const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

const HowItWorks=()=> {
  return (
    <Box p={8} pl={20} >
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'CREATE YOUR ACCOUNT'}
          text={
            'Register a free account and start your first step to passive income.'
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'MAKE YOUR DEPOSIT'}
          text={
            'Invest your preferred amount and get a stable daily income.'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
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