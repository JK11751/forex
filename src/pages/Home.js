import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
//import btcSrc from '../assets/btc.png';
import About from './About'
import Investiment from './Investment'
import {motion} from "framer-motion";
import Statistics from "./UserProfile/Statistics";
//import Us from "./Us";

const Home = ()=>{
    return(
        
        <Box h={'74vh'} w={'full'} bgColor={'gray.200'}  >

        <Box pt={80}>
        <Statistics/>
        </Box>
        <Box pt={20}>
        <About/>
        </Box>
        <Investiment/>
        </Box>
    )
}

export default Home;
