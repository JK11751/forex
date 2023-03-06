import {
    Box,
    Button,
    Flex,
    Heading,
    Icon,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { React } from 'react';
  import {
    FcAssistant,
    FcCollaboration,
    FcDonate,
  } from 'react-icons/fc';
  
  const Card = ({ heading, description, icon, href }) => {
    return (
      <Box 
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        bgColor={"white"}
        boxShadow={'sm'}
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
            Learn more
          </Button>
        </Stack>
      </Box>
    );
  };
  
   const Choose=()=> {
    return (
      <Box pl={20}>
      <Heading fontSize={{ base: 'xl', sm: '4xl' }}  fontWeight={'bold'} align={"center"} pb={8}>
      Why Choose Us
        </Heading>
          <SimpleGrid columns={[1,2,3]} spacing='20px'  >
            <Card
              heading={'SAFE AND SECURE'}
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              description={
                'Our website using Comodo SSL Security, SSL encryption and that confirms that the presented content is the genuine and legitimate.'
              }
              href={'#'}
            />
            <Card
              heading={'PROFESSIONAL TEAM'}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={
                'We are team of professional traders in Forex & Crypto Exchange and Coins trading and Crypto Mining who know how to grab the profit at the end of the day.'
              }
              href={'#'}
            />
            <Card
              heading={'STEADY INCOME'}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={
                'We work around the clock - this means that your money is constantly in circulation and your profit grows every hour.'
              }
              href={'#'}
            />
            <Card
              heading={'STEADY INCOME'}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={
                'We work around the clock - this means that your money is constantly in circulation and your profit grows every hour.'
              }
              href={'#'}
            />
            <Card
              heading={'STEADY INCOME'}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={
                'We work around the clock - this means that your money is constantly in circulation and your profit grows every hour.'
              }
              href={'#'}
            />
            <Card
              heading={'STEADY INCOME'}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={
                'We work around the clock - this means that your money is constantly in circulation and your profit grows every hour.'
              }
              href={'#'}
            />
          </SimpleGrid>
      </Box>
    );
  }
  export default Choose;