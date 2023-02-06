import React from "react";
 
// We use Route in order to define the different routes of our application
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthenticationButton from "./components/authentication-button";
 
// We import all the components we need in our app
import LoginButton from "./components/login";
import MainMenu from "./components/mainmenu";
// Import site wide styling
import './stylesheets/site-style.scss';


import Home from "./pages/home";
import Profile from "./pages/profile";
import PlayerPokemon from "./pages/player-pokemon";
import PlayerTeam from "./pages/player-team";
import ErrorPage from "./pages/error-page";
import LandingPage from "./pages/landing-page";
 
const App = () => {
 return (
  <div>
    <div>
     <MainMenu class="hideme" />
     </div>
     <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="mypokemon" element={<PlayerPokemon />} />
        <Route path="myteams" element={<PlayerTeam />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
     </div>
  </div>
 );
};
 
export default App;