import {
  Box,
  Heading,
  SimpleGrid,
    VStack,
    Text,
    Divider,
    Button,
} from '@chakra-ui/react';
import PlanCard from '../../Cards/PlanCard';
import { plandata } from '../../constants/PlansList';

 const Investiment=()=> {
  return (
    <Box bgColor={'#212529'} pb={40}>
    <Box pl={10} pt={20}  alignItems={'center'} pr={10} mb={20} >
    <Heading fontSize={'50px'} pb={40} color={'white'} fontWeight={800} fontFamily={"sans-serif"} lineHeight={1.25} align={"center"} mb={'15px'}>
    Investiment Plans
      </Heading>
        <SimpleGrid columns={[1,2,3,4]} spacing='20px'  >
        {plandata.map(plan => {
        return <PlanCard key={plan.id} {...plan} />;
      })}
        </SimpleGrid>
    </Box>
    <Box bgColor={'white'} 
    pb={40}
    ml={10}
    mr={10}
     borderWidth={1}>
      <VStack >
      <Heading width={'full'}  fontFamily={"sans-serif"} textColor={'white'} textAlign={'center'} pt={'60px'}  bgColor={"#fe6600"} fontSize={'28px'}
         lineHeight={'40px'}
         h={40}
          mb={'15px'} fontWeight={'700'} 
          >
          Promo Package
          </Heading>
      <Text fontSize={'20px'} fontWeight={700} color={'#2d2d2d'}
    lineHeight={1.1}
    fontFamily={'sans-serif'} >40.5% profit in 24 hours</Text>
      <Divider/>
  <Text color={'#747474'} fontSize={'15px'} textColor={'#747474'} fontWeight={400} lineHeight={'28px'}
        fontFamily ={'sans-serif'}>Minimum Amount : $1,100</Text>
      <Divider/>
      <Text color={'#747474'} fontSize={'15px'} textColor={'#747474'} fontWeight={400} lineHeight={'28px'}
        fontFamily ={'sans-serif'}>Maximum Amount : Unlimted</Text>
      <Divider/>
      <Text color={'#747474'} fontSize={'15px'} textColor={'#747474'} fontWeight={400} lineHeight={'28px'}
        fontFamily ={'sans-serif'}>5% Referral Bonus</Text>
      <Divider/>
      <Text color={'#747474'} fontSize={'15px'} textColor={'#747474'} fontWeight={400} lineHeight={'28px'}
        fontFamily ={'sans-serif'}>Reinvestment unlimited</Text>
        <Divider/>
      <Button color={'white'}  width={200} height={"60px"} bgColor={"#fe6600"} cursor={"pointer"} fontSize={'16px'} fontWeight={'700'} transition={"all 0.5s ease 0s"} borderRadius={'15px'} display={"inline-block"}>Get Started</Button>
      </VStack>
    </Box>
    </Box>
  );
}
export default Investiment;