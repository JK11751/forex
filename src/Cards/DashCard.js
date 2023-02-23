import React from "react";

import { Badge, Flex,Box,Spacer,Text } from "@chakra-ui/react";




const  DashCard=(data)=> {
   
  
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' shadow='md' p={4}>
      <Flex pb={2} >
       <Text>{data.title}</Text>
       <Spacer />
       <Badge borderRadius={5} p={2} colorScheme={"pink"} fontSize={'3xs'} >{data.badge}</Badge>
       </Flex>
       <Text>{data.price}</Text>
  
       
      </Box>
    )
  }
  export default DashCard