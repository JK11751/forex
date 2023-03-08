import { Box } from "@chakra-ui/react";
import React from "react";
import About from './About'
import Investment from "./Investment";
import Statistics from "./Statistics";
import Testimonials from "./Testimonial/Testimonials";
import Landing from "./Landing";
import Choose from "./Choose";
import HowItWorks from "./HowItWoks";

const Home = ()=>{
    return(
        
        <Box >
        <Landing/>
        <Box pb={10}>
        <Statistics/>
        </Box>
        <About/>
        <Box bg={'#f9f9f9'} pb={8}>
        <Choose/>
        </Box>
        <Box >
        <HowItWorks/>
        </Box>
        <Investment/>
        
        <Testimonials/>
        </Box>
    )
}

export default Home;
