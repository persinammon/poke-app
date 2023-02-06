import React from "react";
  
// We import NavLink to utilize the react router.
import { NavLink, useLocation } from "react-router-dom";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import AuthenticationButton from "./authentication-button";
 
//set prop for trainer/<id>/pokemon
function MainMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('left')


  if (useLocation().pathname == "/") {
    return null
  }

  return (
    <>
      <Button colorScheme='blue' onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>
          <DrawerBody>
            <NavLink to="home">Home</NavLink><br />
            <NavLink to="profile">Player Profile</NavLink><br />
            <NavLink to="mypokemon">Pokemon</NavLink><br />
            <NavLink to="myteams">Teams</NavLink><br />
            <AuthenticationButton /><br />
            <DrawerCloseButton /><br />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MainMenu;