import React from "react";

// Import site wide styling
import './stylesheets/site-style.scss';
 
// We import all the components we need in our app
import AuthenticationButton from "./components/authentication-button";


import { BrowserRouter as Router, Routes, Route, NavLink}
    from 'react-router-dom';

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
    
import Home from './pages/home';
import Profile from './pages/profile';
import PlayerPokemon from "./pages/player-pokemon";   
import PlayerTeam from "./pages/player-team";

 
const App = () => {
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
            <NavLink to="/home">Home</NavLink><br />
            <NavLink to="/profile">Profile</NavLink><br />
            <NavLink to="">My Pokemon</NavLink><br />
            <NavLink to="/trainer/<id>/teams">My Teams</NavLink><br />
            <AuthenticationButton /><br />
            <DrawerCloseButton /><br />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )

};
 
export default App;

