import {
  SimpleGrid,
  Image,
  Flex,
  Text,
  Stack,
  Heading,
  Button,
  Box,
  Spacer,
} from '@chakra-ui/react';

import { React} from 'react';
import images  from '../../constants/images'


const About =()=> {
  return (
    <Box  bgColor={'white'} py={12} mb={40} >
      <SimpleGrid columns={2} spacing={10}>
      <Flex  h={500} pl={20} >
          <Image
            borderRadius={15}
            alt={'abou image'}
            src={images.about}
            objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4} h={500} pr={20} >
          <Heading
            fontWeight={700}
            fontSize={'38px'}
            lineHeight={1.25}
            fontFamily={"sans-serif"}
            p={2}>
           About Us
          </Heading>
          <Text pb={10} color={'#3b3b3b'} font-size={'15px'} fontWeight={400} lineHeight='28px' fontFamily={"sans-serif"}>
          We provide the best Investment profitability return with our carefully prepared and time tested investment strategy.
           <Spacer/>
            We indulge in Cryptocurrency trading. Our trading team consists of highly qualified traders, analytical experts who by using their experience and are able to predict the movements in the market with best accuracy.
            <Spacer/>
             Global Trades Limited has achieved and occupied a stable position in the financial market and won the confidence of numerous investors from all over the world. Global Trades Limited aims to deliver a complete and professional service aimed at meeting the highest requirement of our clients. Our high standards can be verified by the increasing numbers of long-standing clients.
          </Text>
          <Button  color={'white'} width={200} height={"60px"} bgColor={"#fe6600"} cursor={"pointer"} fontSize={'16px'} fontWeight={'700'} transition={"all 0.5s ease 0s"} borderRadius={'15px'} display={"inline-block"}>Get Started</Button>
        </Stack>
      </SimpleGrid>
    </Box>
  );
}
export default About;