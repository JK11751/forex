import React, {useState,useEffect} from 'react';
import {
  Box,
} from '@chakra-ui/react';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Investment from './pages/Investment';
import Testimonials from './pages/Testimonials';
import About from './pages/About';
import Loading  from './components/Loading';


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

  return (
    <>
    {loading === false ? (
      
    <Box>
    <NavBar/>
    <Home/>
    <About/>
     <Investment/>
     <Testimonials/>
    </Box>
    ) : (
        <Loading />
      )}

    </>
  );
}

export default App;
