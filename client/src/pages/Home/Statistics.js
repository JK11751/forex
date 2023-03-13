import {
  Box,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import { React} from 'react';
import { FaUsers } from 'react-icons/fa';
import { RiLuggageDepositLine } from 'react-icons/ri';
import { MdPublishedWithChanges} from 'react-icons/md';


function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
     
      px={4}
      borderLeftWidth={1}
      borderLeftColor={"white"}
      py={5}>
      <Flex justifyContent={'space-between'}>
      <Box
          color={'white'}
          alignContent={'center'}>
          {icon}
        </Box>
        <Box>
        <StatNumber fontSize={'xl'} textColor={"white"} fontWeight={'medium'} pb={2}>
            {stat}
          </StatNumber>
          <StatLabel fontWeight={'medium'} isTruncated textColor={"black"}>
            {title}
          </StatLabel>
          
        </Box>
       
      </Flex>
    </Stat>
  );
}

const Statistics=()=> {
  return (
    <Box  bgColor={"#fe6600"} mb={20} boxShadow={'sm'} borderWidth={1} >
      <SimpleGrid columns={3} spacing={10}>
        <StatsCard
          title={'Registered Users'}
          stat={'5,000'}
          icon={<FaUsers size={'3em'} />}
        />
        <StatsCard
          title={'Deposits'}
          stat={'$150,245,820.00'}
          icon={<RiLuggageDepositLine size={'3em'} />}
        />
       
        <StatsCard
          title={'Total Withdrawn'}
          stat={'$188,420,397.00'}
          icon={<MdPublishedWithChanges size={'3em'} />}
        />
      </SimpleGrid>
    </Box>
  );
}
export default Statistics;