import React, { useState } from "react";
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  HStack,
  InputGroup,
  Input,
  Heading,
  Text,
  InputLeftAddon,
  Textarea,
  Button,
  Stack,
  Image,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import Toast from "../../components/PageComponents/Toast";
import images from "../../constants/images";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    <Toast
      title="Message sent successfully"
      status="success"
      description="hello"
    />;
  };
  return (
    <Box align={"center"}>
       <Box w={"full"} h={"400px"}  bgImage={'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}>
       
       <Heading pl={20} zIndex={2 } position={"relative"} lineHeight={'1.1'} fontSize={'50px'} textAlign={'start'} pt={40} color={'white'}>Contact Us</Heading>
       </Box>
      <HStack  >
        <VStack
          height="90vh"
          pt="70px"
          mb="50px"
          pl="50px"
          textColor={"white"}
          w={"400px"}
          bgColor={"#f9f9f9"}
        >
          <Heading
            color={"#222222"}
            fontSize={"38px"}
            lineHeight={1.25}
            fontWeight={700}
            pb={4}
          >
            Contact Us
          </Heading>
          <Box>
            <VStack pl={0} spacing={3} alignItems="flex-start">
              <Button
                fontSize={"15px"}
                fontWeight={"400"}
                fontFamily={"sans-serif"}
                size="md"
                height="48px"
                width="200px"
                variant="ghost"
                color="#747474"
                _hover={{ border: "2px solid #1C6FEB" }}
                leftIcon={<MdPhone color="#fe6600" size="20px" />}
              >
                +91-988888888
              </Button>
              <Button
                fontSize={"15px"}
                fontWeight={"400"}
                fontFamily={"sans-serif"}
                size="md"
                height="48px"
                width="200px"
                variant="ghost"
                color="#747474"
                _hover={{ border: "2px solid #1C6FEB" }}
                leftIcon={<MdEmail color="#fe6600" size="20px" />}
              >
                hello@abc.com
              </Button>
              <Button
                fontSize={"15px"}
                fontWeight={"400"}
                fontFamily={"sans-serif"}
                size="md"
                height="48px"
                width="200px"
                variant="ghost"
                color="#747474"
                _hover={{ border: "2px solid #1C6FEB" }}
                leftIcon={<MdLocationOn color="#fe6600" size="20px" />}
              >
                Karnavati, India
              </Button>
            </VStack>
          </Box>
        </VStack>
        <Box width="70%" height="90vh" pt="20px" mb="50px" pl="50px">
          <Stack>
            <Heading
              fontSize={"38px"}
              lineHeight={1.25}
              fontWeight={700}
              mb={"25px"}
            >
              Get In Touch.
            </Heading>
            <HStack pr="50px">
              <FormControl isRequired>
                <Input 
                 textAlign={'left'}
                  fontSize={"1rem"} lineHeight={1.5} color={"#EFEFEF"}
                  id="firstName"
                  placeholder="Full Name"
                  variant="outline"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <Input
                textAlign={'left'}
                  fontSize={"1rem"} lineHeight={1.5} color={"#EFEFEF"}
                  id="email"
                  placeholder="Email Address"
                  type="email"
                  variant="outline"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
            </HStack>

            <HStack pr="50px" pt="20px">
              <FormControl isRequired>
                <Input
                textAlign={'left'}
                  fontSize={"1rem"} lineHeight={1.5} color={"#EFEFEF"}
                  id="lastName"
                  placeholder="Subject"
                  variant="outline"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                  <Input
                  textAlign={'left'}
                  fontSize={"1rem"} lineHeight={1.5} color={"#EFEFEF"}
                    variant="outline"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
              </FormControl>
            </HStack>
          </Stack>
          <VStack>
            <FormControl pr="50px" pt="20px" isRequired>
              <Textarea
              textAlign={'left'}
              fontSize={"1rem"} lineHeight={1.5} color={"#EFEFEF"}
                height="12rem"
                // resize="vertical"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
              />
            </FormControl>

            <Button
              textColor={"white"}
              width={200}
              height={"60px"}
              bgColor={"#fe6600"}
              cursor={"pointer"}
              fontSize={"16px"}
              fontWeight={"700"}
              transition={"all 0.5s ease 0s"}
              borderRadius={"15px"}
              display={"inline-block"}
              onClick={(e) => handleSubmit(e)}
            >
              Send Message
            </Button>
          </VStack>
        </Box>
      </HStack>
      <Box />
    </Box>
  );
};
export default Contact;
