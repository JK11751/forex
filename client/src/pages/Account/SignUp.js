import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock,FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaPhoneAltock = chakra(FaPhoneAlt);

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 
  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="white"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="#fe6600" />
        <Heading color="#222222" fontSize={'38px'}
    lineHeight={1.25} pb={4}>Register</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
             
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl >
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="#fe6600" />}
                  />
                  <Input textAlign={'start'} type="email" placeholder="Username" />
                </InputGroup>
              </FormControl>
			  <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="#fe6600" />}
                  />
                  <Input textAlign={'start'} type="email" placeholder="email address" />
                </InputGroup>
              </FormControl>
			  <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaPhoneAltock color="#fe6600" />}
                  />
                  <Input textAlign={'start'} type="email" placeholder="Phone" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="#fe6600" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    textAlign={'start'}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                textColor={'white'}
                variant="solid"
                bgColor="#fe6600"
                width="full"
              >
                Register
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Already a member ?{" "}
        <Link color="#fe6600" href="#" onClick={() => {
        navigate('/login')
   }}>
          Login
        </Link>
      </Box>
    </Flex>
  );
};

export default SignUp;


