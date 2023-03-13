import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const faqItems = [
  {
    question: "Which e-currencies do you accept?",
    answer: "We accept Bitcoin, Ethereum and Perfect Money.",
  },
  {
    question: "How can I withdraw funds?",
    answer:
      "Login to your account using your username and password and check the Withdraw section.",
  },
  {
    question: "How long does it take for my deposit to be added to my account?",
    answer: "Your account will be updated as soon as you deposit.",
  },
  {
    question: "How can I change my password?",
    answer:
      " Log into your Global Trades Limited account and click on the Account Information. You can change your password there..",
  },
  {
    question:
      "What if I can't log into my account because I forgot my password?",
    answer:
      " Click forgot password link, type your e-mail and you'll receive your account information.",
  },
  {
    question: "Does a daily profit paid directly to my currency account?",
    answer:
      " Yes, profits are gathered on your Global Trades Limited account and you can withdraw them anytime.",
  },
  {
    question: "How do you calculate the interest on my account?",
    answer:
      " Depending on each plan. Interest on your Global Trades Limited account is acquired Daily, Weekly, Bi-Weekly, Monthly and Yearly and credited to your available balance at the end of each day.",
  },
  {
    question:
      "Can I make an additional deposit to Global Trades Limited account once it has been opened?",
    answer: " Yes, you can but all transactions are handled separately.",
  },
  {
    question:
      "After I make a withdrawal request, when will the funds be available on my ecurrency account?",
    answer:
      " Funds are automated and instantly processed to your wallet after your withdrawal.",
  },
  {
    question: "Can I lose money?",
    answer:
      " We have developed the best investment solution, for all cryptocurrency investors to benefit from, Global Trades Limited is a long term investment company which has been established to help every investors around the world to earn profits by investing.",
  },
  {
    question: "How can I check my account balance?",
    answer:
      " You can access the account information 24 hours, seven days a week over the Internet.",
  },
  {
    question: "How can I make a spend?",
    answer:
      " To make a spend you must first become a member of Global Trades Limited. Once you are signed up, you can make your first spend. All spends must be made through the Member Area. You can login using the member username and password you received when signup.",
  },
  {
    question: "Who manages the funds?",
    answer:
      "These funds are managed by a team of Global Trades Limited experts.",
  },
];

const FAQPage = () => {
  return (
    <Box W="100vw" pl={20} pr={20} color={"white"}  >
      <Accordion allowToggle>
        {faqItems.map((item, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton  bgColor={"#fe6600"}>
                <Box
                  flex="1"
                  textAlign="left"
                  h={"50px"}
                  w={"full"}
                  bgColor={"#fe6600"}
                  pl={10}
                  pt={"5px"}
                  color={"white"}
                  fontWeight={"bold"}
                >
                  {item.question}
                </Box>
                <ChevronDownIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <MotionBox
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 * index }}
              >
                <Text
                  align={"left"}
                  textColor={"black"}
                  bgColor={"white"}
                  fontSize={"15px"}
                  fontWeight={400}
                  fontFamily={"sans-serif"}
                  lineHeight={"28px"}
                >
                  {item.answer}
                </Text>
              </MotionBox>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default FAQPage;
