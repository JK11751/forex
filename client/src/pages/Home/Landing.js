import {
    Flex,
  } from '@chakra-ui/react';
import images from '../../constants/images';
  
  const Landing=()=>{
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        bgImage={images.landing}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
      </Flex>
    );
  }
  export default Landing;