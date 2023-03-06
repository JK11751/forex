import { Box } from "@chakra-ui/react";
import React from "react";
import About from './About'
import Investment from "./Investment";
import Statistics from "./Statistics";
import Testimonials from "../Testimonials";
import Landing from "./Landing";
import Choose from "./Choose";
import HowItWorks from "./HowItWoks";

const Home = ()=>{
    return(
        
        <Box >
        <Landing/>
        <About/>
        <Box bgColor={"gray.100"} >
        <Choose/>
        </Box>
        <Box bgColor={"gray.200"} >
        <HowItWorks/>
        </Box>
        <Investment/>
        <Statistics/>
        <Testimonials/>
        </Box>
    )
}

export default Home;
