import React from "react";
 
import { Route, Routes, Navigate } from "react-router-dom";
 

import MainMenu from "./components/mainmenu";

import Home from "./pages/home";
import Profile from "./pages/profile";
import {  PlayerPokemon, PlayerTeam }  from "./pages/player-stats";
import { PokemonParent, TrainerParent, TeamParent } from "./pages/parents";
import ErrorPage from "./pages/error-page";
import LandingPage from "./pages/landing-page";
import ViewPokemon from "./pages/all-pokemon";
import Pokemon from "./pages/pokemon"
import Trainer from "./pages/trainer"
import Team from "./pages/team"
import CreateTeam from  "./pages/create-team"

import './stylesheets/site-style.scss';

 
const App = () => {

 return (
  <div>
    <div>
     <MainMenu />
     </div>
     <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="mypokemon" element={<PlayerPokemon />} />
        <Route path="myteams" element={<PlayerTeam />} />
        <Route path="*" element={<ErrorPage />} />
        <Route exact path="pokemon" element={<PokemonParent />}> 
          <Route index element={<Navigate to="/home" />} />
          <Route exact path="all" element={<ViewPokemon />} />
          <Route exact path="all/:pageID" element={<ViewPokemon />} />
          <Route exact path=":pokemonID" element={<Pokemon />} />
        </Route>
        <Route exact path="trainer" element={<TrainerParent />}>
          <Route index element={<Navigate to="/home" />} />
          <Route exact path=":trainerID" element={<Trainer />} />
          <Route path=":trainerID/pokemon" element={<ViewPokemon />} />
        </Route>
        <Route exact path="team" element={<TeamParent />}>
          <Route index element={<Navigate to="/home" />} />
          <Route exact path="create" element={<CreateTeam />} />
          <Route path=":teamID" element={<Team />} />
        </Route>
      </Routes>
     </div>
  </div>
 );
};
 
export default App;