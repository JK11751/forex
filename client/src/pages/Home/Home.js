import { Box } from "@chakra-ui/react";
import React from "react";
import About from './About'
import Investment from "./Investment";
import Statistics from "./Statistics";
import Landing from "./Landing";
import Choose from "./Choose";
import HowItWorks from "./HowItWoks";
import Footer from '../Home/Footer'
import ProfitCalculator from '../Home/ProfitCalculator/ProfitCalculator';

const Home = ()=>{
    return(
        <Box>
        <Landing/>
        <Box>
        <Statistics/>
        </Box>
        <About/>
        <Box>
        <Choose/>
        </Box>
        <Box >
        <HowItWorks/>
        </Box>
        <Investment/>
        <ProfitCalculator/>
        <Footer/>
        

        </Box>
        
    )
}

export default Home;
