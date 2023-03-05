import { Box, HStack, Flex } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../PageComponents/Sidebar";
import TopBar from "../PageComponents/TopBar";

const Layout = () => {
  return (
    <HStack spacing={0} overflowX={"hidden"} overflowY={"hidden"}>
      <Sidebar />
      <Flex bg="#F9F9F9" direction="column" maxWidth="85vw" h="100vh">
        <TopBar/>
        <Box overflowY="hidden" h="89.5vh" p={5}>
          <Outlet />
        </Box>
      </Flex>
    </HStack>
  );
};

export default Layout;