import { HStack, Button, Stack, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import headerLogo from "../../assets/headerLogo3.png";
import "./header.css";

const Header = () => {
  const [sticky, setSticky] = useState("");

  // on render, set listener
  useEffect(() => {
    console.log("hello");
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
    setSticky(stickyClass);
    console.log(stickyClass);
  };

  const classes = `header-section d-none d-xl-block ${sticky}`;

  return (
    <>
      <Stack
        className={classes}
        boxShadow={"md"}
        pt={"3"}
        pb={"3"}
        w="100%"
        bg={"white"}
        flexDirection={"row"}
        justifyContent={"space-around"}
      >
        <HStack
          textTransform={"capitalize"}
          letterSpacing={"wider"}
          alignSelf={"flex-end"}
          w={"md"}
        >
          <Button variant={"unstyled"} display={"flex"} pl={10} flexDirection={"row"}>
            <NavLink to={"/"}>
              <Image src={headerLogo} mr={"1"} />
            </NavLink>
            <NavLink to={"/"}>
              <Text color={"rgb(252,211,76)"}>cryptoRank</Text>
            </NavLink>
          </Button>
        </HStack>

        <HStack spacing={'40px'} pr={20}>
          <Button className="btn"
            variant={"unstyled"}
            
          >
            <Link to="/">Home</Link>
          </Button>
          <Button className="btn"
            variant={"unstyled"}
           
          >
            <Link to="/about">About </Link>
          </Button>

          <Button
            variant={"unstyled"}
            className="btn"
          >
            <Link to="/faq">Faq</Link>
          </Button>
          <Button
            variant={"unstyled"}
            className="btn"
          >
            <Link to="/contact">Contact-Us</Link>
          </Button>
          <Button
            variant={"unstyled"}
            className="btn"
          >
            <Link to="/privacy">Privacy Policy</Link>
          </Button>
          <Button
            variant={"unstyled"}
            className="btn"
          >
            <Link to="/exchanges">Exchanges</Link>
          </Button>
          <Button
            variant={"unstyled"}
            className="btn"
            
          >
            <Link to="/coins">Coins</Link>
          </Button>
          <Button
            variant={"unstyled"}
            className="btn"
          >
            <Link to="/login">Login</Link>
          </Button>
          <Button
            variant={"unstyled"}
            className="btn"
          >
            <Link to="/register">Register</Link>
          </Button>
        </HStack>
      </Stack>
    </>
  );
};

export default Header;
