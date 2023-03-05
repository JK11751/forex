import { HStack ,Button, Stack ,Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink,  } from "react-router-dom";
import headerLogo from '../../assets/headerLogo3.png'


const Header =()=>{

    return(
        <>

       
        <Stack p={'3'} bg={'transparent'} shadow={'base'}  flexDirection={'row'}  justifyContent={'space-around'} >

        <HStack color={'black'} textTransform={'capitalize'} letterSpacing={'wider'} alignSelf ={'flex-end'} w={'sm'}  >
            <Button variant={'unstyled'} color={'black'}   display={'flex'} flexDirection={'row'}  >
                <NavLink to={"/"} >
                <Image  src={headerLogo} mr={'1'} /> 
                    </ NavLink >
                   <NavLink to={"/"} >
                    <Text color={'rgb(252,211,76)'} >
                        cryptoRank
                        </Text> 
                    </NavLink>
            </Button>
        </HStack>

        <HStack justifyContent={'space-around'} 
         transition ={"all 0.3s"} 
          >

            <Button variant={'unstyled'} color={'rgb(252,211,76)'} mr={'1'} transition ={"all 0.1s"} css={{
            "&:hover":{
              transform :"scale(1.1)",
              textDecoration: "underline",
              textDecorationColor: "red"
            }
          }} >
                <Link to="/" >Home</Link>
            </Button>
            <Button variant={'unstyled'} color={'rgb(252,211,76)'} pl={'4' } transition ={"all 0.1s"}  css={{
            "&:hover":{
              transform :"scale(1.1)",
              textDecoration: "underline",
              textDecorationColor: "red"
            }
          }}>
                <Link to='/about'>About </Link>
            </Button>

            

            
            <Button variant={'unstyled'} color={'rgb(252,211,76)'} pl={'4' } transition ={"all 0.1s"}  css={{
            "&:hover":{
              transform :"scale(1.1)",
              textDecoration: "underline",
              textDecorationColor: "red"
            }
          }}>
                <Link to='/faq'>Faq</Link>
            </Button>
            <Button variant={'unstyled'} color={'rgb(252,211,76)'} pl={'4' } transition ={"all 0.1s"}  css={{
            "&:hover":{
              transform :"scale(1.1)",
              textDecoration: "underline",
              textDecorationColor: "red"
            }
          }}>
                <Link to='/contact'>Contact-Us</Link>
            </Button>
            <Button variant={'unstyled'} color={'rgb(252,211,76)'} pl={'4' } transition ={"all 0.1s"}  css={{
            "&:hover":{
              transform :"scale(1.1)",
              textDecoration: "underline",
              textDecorationColor: "red"
            }
          }}>
                <Link to='/privacy'>Privacy Policy</Link>
            </Button>
            <Button variant={'unstyled'} color={'rgb(252,211,76)'} pl={'4' } transition ={"all 0.1s"}  css={{
            "&:hover":{
              transform :"scale(1.1)",
              textDecoration: "underline",
              textDecorationColor: "red",
              
            }
          }}>
                <Link to='/exchanges'>Exchanges</Link>
            </Button>
            <Button variant={'unstyled'} color={'rgb(252,211,76)'} pl={'4' } transition ={"all 0.1s"} css={{
            "&:hover":{
              transform :"scale(1.1)",
              textDecoration: "underline",
              textDecorationColor: "red",
            }
          }}>
                <Link to='/coins'>Coins</Link>
            </Button>
            <Button variant={'unstyled'} color={'rgb(252,211,76)'} pl={'4' } transition ={"all 0.1s"}  css={{
            "&:hover":{
              transform :"scale(1.1)",
              textDecoration: "underline",
              textDecorationColor: "red"
            }
          }}>
                <Link to='/login'>Login</Link>
            </Button>
            <Button variant={'unstyled'} color={'rgb(252,211,76)'} pl={'4' } transition ={"all 0.1s"}  css={{
            "&:hover":{
              transform :"scale(1.1)",
              textDecoration: "underline",
              textDecorationColor: "red",
            }
          }}>
                <Link to='/register'>Register</Link>
            </Button>
           
        </HStack>

        </Stack>

        </>
    )
}


export default Header;

