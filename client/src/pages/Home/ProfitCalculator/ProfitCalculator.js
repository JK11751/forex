import { Box, Button, Heading, HStack} from '@chakra-ui/react'
import React from 'react'
const ProfitCalculator = () => {
  return (
    <Box
      width={'full'}
      h={'70vh'}
      bgColor={'#fe6600'}
      pl={20}
      pt={40}
    >
      <HStack spacing={80} >
        <Heading
          color={'#ffffff'}
          marginBottom={'18px'}
          textAlign={'start'}
          lineHeight={1.25}
          fontSize={'38px'}
          fontWeight={700}
          maxW={"200px"}
        >
          Profit Calculator
        </Heading>
        <Button
          borderRadius={'15px'}
          mb={'20px'}
          bgColor={'#FF8431'}
          color={'white'}
          minWidth={'150px'}
        >
          Calculate
        </Button>
      </HStack>
    </Box>
  )
}

export default ProfitCalculator
