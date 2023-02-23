import React from 'react'
import { useNavigate } from "react-router-dom";
import { LogoutDialogue } from "../PageComponents/LogoutDialogue";
import {
    HStack
} from '@chakra-ui/react'
import {
    Box,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";
import {
    FiHome,
    FiCalendar,
    FiRefreshCcw,
    FiDollarSign,
    FiSettings,
    FiLogOut,
    FiGlobe
} from 'react-icons/fi'

const SideBarItemData = [
    {
      id: 0,
      item_name: "Dashboard",
      icon: FiHome,
      route: `/dashboard`,
    },

    {
      id: 1,
      item_name: "Deposit",
      icon:  FiDollarSign,
      route: `/deposits`,
    },
    {
      id: 2,
      item_name: "Withdrawal",
      icon: FiGlobe,
      route: `/withdrawals`,
    },
    {
      id: 3,
      item_name: "History",
      icon:   FiCalendar,
      route: `/history`,
    },
    {
      id: 4,
      item_name: "Referrals",
      icon: FiRefreshCcw,
      route: `referrals`,

    },
    {
      id: 5,
      item_name: "Settings",
      icon:  FiSettings,
      route: `/settings`,
    
    }
  ];
  const SideBarItem = (props) => {
    const navigate = useNavigate();
    return (
      <HStack
        _hover={{ color: "brand.300" }}
        cursor="pointer"
        py="25px"
        pl="20px"
        className="sidebaritem"
        id={`sidebaritem-${props.index}`}
        onClick={() => {
          props.setCurrent(props.index);
          navigate(`${props.route}`);
        }}
      >
        <props.icon boxSize={30} pl="20px" />
        <Text>{props.item_name}</Text>
      </HStack>
    );
  };

const Sidebar=() =>{
    const [current, setCurrent] = React.useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure();
 //logic to set active sidebar item
 React.useEffect(() => {
    var sidebarItemsArray = document.getElementsByClassName("sidebaritem");
    var i;
    for (i = 0; i < sidebarItemsArray.length; i++) {
      sidebarItemsArray[i].className = sidebarItemsArray[i].className.replace(
        "active-sidebaritem",
        ""
      );
      if (sidebarItemsArray.length > 0) {
        sidebarItemsArray[i].classList.remove("active-sidebaritem");
      }
      const itemIndex = current;
      if (sidebarItemsArray[itemIndex] !== undefined)
        sidebarItemsArray[itemIndex].className += " active-sidebaritem";
    }
  }, [current]);
     return (
    <>
      <Box width="15vw" h="100vh" overflowY={"scroll"} overflowX="hidden">
        <Box pt="20px" width="15vw" h="100vh" bg="white">
          <Box>
            {SideBarItemData.map((item, index) => {
              return (
                <SideBarItem
                  item_name={item.item_name}
                  icon={item.icon}
                  index={index}
                  setCurrent={setCurrent}
                  route={item.route}
                />
              );
            })}
            <Box onClick={() => onOpen()}>
              <SideBarItem
                item_name="Log Out"
                icon={FiLogOut}
                setCurrent={setCurrent}
                route="#"
                index={6}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <LogoutDialogue isOpen={isOpen} onClose={onClose} />
    </>
  );
}
export default Sidebar