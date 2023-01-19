import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import LoginButton from "./components/login";
import MainMenu from "./components/mainmenu";
// Import site wide styling
import './stylesheets/site-style.scss';



 
const App = () => {
 return (
   <div>
     <MainMenu class="hideme" />
     <span class="landing">
      <p>Welcome to Pokémon!</p> 
      <p>Login or Sign Up Here</p>
      <LoginButton />
     </span>
   </div>
 );
};
 
export default App;
