import {
    Box,
    Flex,
    Heading,
    Icon,
    SimpleGrid,
    Stack,
    Text,
  } from '@chakra-ui/react';
  import { React } from 'react';
  import {FcOnlineSupport} from 'react-icons/fc';
  import {RiTeamLine} from 'react-icons/ri';
  import {MdPublishedWithChanges} from 'react-icons/md';
  import {FaLock,FaRegMoneyBillAlt,FaRegIdCard} from 'react-icons/fa';
  const Card = ({ heading, description, icon, href }) => {
    return (
      <Box 
      maxW={{ base: 'full', md: '300px' }}
        w={'full'}
        bgColor={'white'}
        p={5}
        mb={40}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'#fe6600'}
            rounded={'full'}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading fontWeight={700} fontSize={'28px'}  line-height={'40px'} mb={'15px'} >{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
        </Stack>
      </Box>
    );
  };
  
   const Choose=()=> {
    return (
      <Box pl={20} pt={20} bgColor={'#f9f9f9'}>
      <Heading fontSize={'50px'} pb={20} color={"#2d2d2d"} fontWeight={800} fontFamily={"sans-serif"} lineHeight={1.25} align={"center"} mb={'15px'}>
      Why Choose Us
        </Heading>
          <SimpleGrid columns={[1,2,3]} spacing='20px'  >
            <Card
              heading={'SAFE AND SECURE'}
              icon={<Icon as={FaLock} w={10} h={10} />}
              description={
                'Our website using Comodo SSL Security, SSL encryption and that confirms that the presented content is the genuine and legitimate.'
              }
              href={'#'}
            />
            <Card
              heading={'PROFESSIONAL TEAM'}
              icon={<Icon as={RiTeamLine} w={10} h={10} />}
              description={
                'We are team of professional traders in Forex & Crypto Exchange and Coins trading and Crypto Mining who know how to grab the profit at the end of the day.'
              }
              href={'#'}
            />
            <Card
              heading={'STEADY INCOME'}
              icon={<Icon as={FaRegMoneyBillAlt} w={10} h={10} />}
              description={
                'We work around the clock - this means that your money is constantly in circulation and your profit grows every hour.'
              }
              href={'#'}
            />
            <Card
              heading={'GREAT CUSTOMER SUPPORT'}
              icon={<Icon as={FcOnlineSupport} w={10} h={10} />}
              description={
                'We understand how important having reliable support service is to you. Please dont hesitate to contact us if you have any questions and we will get back to you in 24 Hours!'}
              href={'#'}
            />
            <Card
              heading={'REGISTERED COMPANY'}
              icon={<Icon as={FaRegIdCard} w={10} h={10} />}
              description={
                'We are a legal company registered in UK providing its investment services to the members all around the world.'
              }
              href={'#'}
            />
            <Card
              heading={'INSTANT WITHDRAWAL'}
              icon={<Icon as={MdPublishedWithChanges} w={10} h={10} />}
              description={
                'Get your payment instantly as soon as you request it!'}
              href={'#'}
            />
          </SimpleGrid>
      </Box>
    );
  }
  export default Choose;