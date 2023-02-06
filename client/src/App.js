import React from "react";
 
// We use Route in order to define the different routes of our application
import {BrowserRouter as Router, Route, Routes, Redirect} from "react-router-dom";
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
import ViewPokemon from "./pages/all-pokemon";
 
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
        <Route path="pokemon" element={<Redirect to="/home" />}>
          <Route path="all" element={<ViewPokemon />} />
          <Route path="all/:pageID" element={<ViewPokemon />} />
          <Route path=":pokemonID" element={<Pokemon />} />
        </Route>
        <Route path="trainer" element={<Redirect to="/home" />}>
          <Route path=":trainerID" element={<Trainer />} />
          <Route path=":trainerID/pokemon" element={<ViewPokemon />} />
        </Route>
        <Route path="team" element={<Redirect to="/home" />}>
          <Route path=":teamID" element={<Team />} />
          <Route path="create" element={<CreateTeam />} />
        </Route>
      </Routes>
     </div>
  </div>
 );
};
 
export default App;