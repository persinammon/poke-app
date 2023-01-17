import React from "react";
  
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

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
import LogoutButton from "./logout";
 
//set prop for trainer/<id>/pokemon
function MainMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('left')

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
            <NavLink to="/profile">Player Profile</NavLink><br />
            <NavLink to="/home">Home</NavLink><br />
            <NavLink to="/trainer/<id>/pokemon">Pokemon</NavLink><br />
            <NavLink to="/trainer/<id>/teams">Teams</NavLink><br />
            <NavLink to="/trainer/<id>/items">Items</NavLink><br />
            <NavLink to="/trainer/<id>/tournaments">Tournaments</NavLink><br />
            <LogoutButton /><br />
            <DrawerCloseButton /><br />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default MainMenu;