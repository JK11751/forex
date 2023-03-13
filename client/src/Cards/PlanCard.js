import { React } from 'react';
import {
    Box,
    Heading,
    VStack,
    Text,
    Divider,
    Button,
  } from '@chakra-ui/react';
  
const PlanCard = ({ title, profit, minimum,maximum,referral, reinvestment}) => {
  return (
    <Box 
    pb={2}
    maxW={{ base: 'full', md: '300px' }}
     borderWidth={1}
     bgColor={'white'}>
      <VStack>
      <Heading width={'full'} fontFamily={"sans-serif"} textColor={'white'} textAlign={'center'} pt={5} pb={5} bgColor={"#fe6600"} fontSize={'28px'}
         lineHeight={'40px'}
          mb={'15px'} fontWeight={'700'} 
          >
          {title}
          </Heading>
      <Text fontSize={'20px'} fontWeight={700} color={'#2d2d2d'}
    lineHeight={1.1}
    fontFamily={'sans-serif'} >{profit}</Text>
      <Divider/>
  <Text color={'#747474'} fontSize={'15px'} textColor={'#747474'} fontWeight={400} lineHeight={'28px'}
        fontFamily ={'sans-serif'}>{minimum}</Text>
      <Divider/>
      <Text color={'#747474'} fontSize={'15px'} textColor={'#747474'} fontWeight={400} lineHeight={'28px'}
        fontFamily ={'sans-serif'}>{maximum}</Text>
      <Divider/>
      <Text color={'#747474'} fontSize={'15px'} textColor={'#747474'} fontWeight={400} lineHeight={'28px'}
        fontFamily ={'sans-serif'}>{referral}</Text>
        <Divider/>
        <Text color={'#747474'} fontSize={'15px'} textColor={'#747474'} fontWeight={400} lineHeight={'28px'}
        fontFamily ={'sans-serif'}>{reinvestment}</Text>
      <Divider/>
      <Button color={'white'}  width={200} height={"60px"} bgColor={"#fe6600"} cursor={"pointer"} fontSize={'16px'} fontWeight={'700'} transition={"all 0.5s ease 0s"} borderRadius={'15px'} display={"inline-block"}>Get Started</Button>

      </VStack>
    </Box>
  );
};
export default PlanCard