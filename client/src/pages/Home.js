import { Box } from "@chakra-ui/react";
import React from "react";
import About from './About'
import Investment from "./Investment";
import Statistics from "./Statistics";
import Testimonials from "./Testimonials";

const Home = ()=>{
    return(
        
        <Box h={'74vh'} w={'full'} bgColor={'gray.200'}  >
        <About/>
        <Investment/>
        <Statistics/>
        <Testimonials/>
        

        
        </Box>
    )
}

export default Home;
