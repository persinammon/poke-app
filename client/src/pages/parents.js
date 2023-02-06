import React from 'react';
import { Outlet } from 'react-router-dom';
  
const PokemonParent = () => {
  return (
    <>
    <Outlet />
    </>
  )
}

const TrainerParent = () => {
    return (
      <>
      <Outlet />
      </>
    )
}

const TeamParent = () => {
    return (
      <>
      <Outlet />
      </>
    )
}
  
export {
    PokemonParent,
    TeamParent,
    TrainerParent
}
