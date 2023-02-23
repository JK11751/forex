import { Box, HStack} from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Content from "../../pages/Dashboard/History/Content";

const HIstoryLayout = () => {
  return (
    <HStack spacing={0}  overflowY={"hidden"}>
     <Content/>
        <Box overflowY="hidden" h="89.5vh" p={5}>
          <Outlet />
        </Box>
     
    </HStack>
  );
};

export default HIstoryLayout;