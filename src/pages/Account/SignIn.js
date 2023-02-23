import { useState } from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { BiLockAlt } from "react-icons/bi";
import { BiShowAlt, BiHide } from "react-icons/bi";
import {
  Button,
  Checkbox,
  Flex,
  Divider,
  Box,
  Text,
  InputGroup,
  InputRightElement,
  FormControl,
  Input,
  Link,
  Stack,
} from '@chakra-ui/react';
import {IconButton } from "@chakra-ui/button";
import {
  InputLeftElement,
} from "@chakra-ui/input";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate= useNavigate();
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

  return (
    <Box >
      <Stack spacing="15px" pl={20} pr={20} pt={4} pb={4}>
        <Flex >
          <Stack spacing={4} w={'full'} >
            <Text align="center" fontSize="4xl" mt={7}>Sign in to your account</Text>
            <Divider color="#000000" orientation="horizontal" />
            <FormControl id="email" isRequired>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<HiOutlineMail color="gray.300" />}
            />
            <Input
              variant="filled"
              size="md"
              placeholder="Enter Email Address"
              type="email"
             
            />
          </InputGroup>
         
        </FormControl>
        <FormControl id="password" isRequired>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<BiLockAlt color="gray.300" />}
            />
            <Input
              variant="filled"
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              size="md"
              
              
            />
            <InputRightElement width="4.5rem">
              {show ? (
                <IconButton
                  as={BiShowAlt}
                  variant="unstyled"
                  h={5}
                  w={5}
                  onClick={handleClick}
                ></IconButton>
              ) : (
                <IconButton
                  as={BiHide}
                  h={5}
                  w={5}
                  variant="unstyled"
                  onClick={handleClick}
                ></IconButton>
              )}
            </InputRightElement>
          </InputGroup>
          
        </FormControl>
        
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}onClick={() => navigate("/forgotpassword")}>Forgot password?</Link>
              </Stack>
              <Button colorScheme={'blue'} variant={'solid'} onClick={() => navigate("/dashboard")}  >
                Sign in
              </Button>
              <Button  >
          Login with Google
        </Button>
              <Flex>
                <Text spacing={4}>Don't have an account?</Text>
                <Link color={'blue.500'} onClick={() => navigate("/register")}>Create one</Link>
              </Flex>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
        </Flex>
      </Stack>
    </Box>
  );
};
export default SignIn;
