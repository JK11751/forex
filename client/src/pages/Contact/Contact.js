import React, { useState } from "react";
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  HStack,
  InputGroup,
  Input,
  InputLeftAddon,
  Textarea,
  Button,
  Stack,
} from "@chakra-ui/react";
import Toast from "../../components/PageComponents/Toast"

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    <Toast
      title="Message sent successfully"
      status="success"
      description="hello"
    />;
  };
  return (
    <Box  align={"center"} >
      <Box
        width="70%"
        height="90vh"
        pt="20px"
        mb="50px"
        pl="50px"
      >
        <Stack>
          <HStack pr="50px">
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                id="firstName"
                variant="flushed"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input
                id="lastName"
                variant="flushed"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
          </HStack>

          <HStack pr="50px" pt="20px">
            <FormControl isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input
                id="email"
                type="email"
                variant="flushed"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Phone Number</FormLabel>
              <InputGroup>
                <InputLeftAddon children="+254" />
                <Input
                  variant="flushed"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </InputGroup>
            </FormControl>
          </HStack>
        </Stack>
        <VStack>
          <FormControl pr="50px" pt="20px" isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea
              height="12rem"
              // resize="vertical"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
            />
          </FormControl>
          <Button
            size="md"
            bg="blue.300"
            w="200px"
            color="tomato"
            align="right"
            ml="40px"
            onClick={(e) => handleSubmit(e)}
            isDisabled={
              !email || !firstName || !lastName || !phoneNumber || !message
            }
          >
            Send Message
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};
export default Contact;