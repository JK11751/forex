import {
    Flex,
    HStack,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Spacer,
    Tag,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { MdNotifications } from "react-icons/md";
  import { FiSearch } from "react-icons/fi";
  import { useOutsideClick } from "@chakra-ui/react";
  const TopBar = () => {
  
    const [show, setShow] = useState(false);
    const ref = React.useRef();
  
    useOutsideClick({
      ref: ref,
      handler: () => setShow(false),
    });

  
    return (
      <>
        <Flex py={3} px={5} alignItems="center" w="85vw" bg="white" h="10vh">
          <VStack alignItems="left" spacing="3px">
            <HStack>
              <Text fontSize="1.5em">Welcome Back, </Text>
            </HStack>
            <Text fontSize="0.7em">
              Check out todays stats Check out todays stats Check out todays stats
            </Text>
          </VStack>
          <Spacer />
          <HStack spacing="30px" mr={3} alignItems="baseline">
            {show ? (
              <InputGroup>
                <InputLeftElement>
                  <FiSearch />
                </InputLeftElement>
                <Input
                  borderRadius="50px"
                  placeholder="Search...."
                  ref={ref}
                  width="400px"
                />
              </InputGroup>
            ) : (
              <Icon
                as={FiSearch}
                h={5}
                w={5}
                cursor="pointer"
                onClick={() => setShow(true)}
              />
            )}
            <Popover isLazy>
              <PopoverTrigger>
                <Tag rounded="2xl" h="8px" cursor="pointer" flexShrink={0}>
                  <HStack>
                    <Icon as={MdNotifications} />
                    <Text>12</Text>
                  </HStack>
                </Tag>
              </PopoverTrigger>
              <PopoverContent zIndex="100" width="400px">
                <PopoverHeader textAlign="left" fontWeight="semibold">
                  Notifications
                </PopoverHeader>
                <PopoverBody>
                  <Text>View all</Text>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </HStack>
        </Flex>
      </>
    );
  };
  
  export default TopBar;