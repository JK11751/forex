import { Box, Button, Text, VStack } from "@chakra-ui/react";
import images from "../../constants/images";

const Landing = () => {
  return (
    <Box
      opacity={0.8}
      w={"full"}
      h={"90vh"}
      bgImage={images.home}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
    >
      <VStack align={"flex-start"} pl={20} pt={"100px"}>
        <Text
          textColor={"#fe6600"}
          fontSize={"20px"}
          fontWeight={700}
          letterSpacing={"0.8px"}
          pb={"10px"}
        >
          Global Trades Limited.
        </Text>
        <Text
          textColor={"white"}
          fontSize={"60px"}
          lineHeight={"1.1"}
          fontWeight={700}
          pb={5}
          maxW={"800px"}
        >
          Let Top Traders Do The Job For You
        </Text>
        <Button
          color={"white"}
          width={200}
          height={"60px"}
          bgColor={"#fe6600"}
          cursor={"pointer"}
          fontSize={"16px"}
          fontWeight={"700"}
          transition={"all 0.5s ease 0s"}
          borderRadius={"15px"}
          display={"inline-block"}
        >
          Get Started{" "}
        </Button>
      </VStack>
    </Box>
  );
};
export default Landing;
