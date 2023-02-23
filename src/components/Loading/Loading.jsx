import React from 'react'
import { Center, Spinner,Text } from '@chakra-ui/react'

 const Loading = () => {
    return (
        <Center>
            <Spinner thickness="4px"
                mt="45vh"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"/>
                <Text>fetching...</Text>
        </Center>
    )
}
export default Loading