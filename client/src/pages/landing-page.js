import React from 'react';

import AuthenticationButton from '../components/authentication-button';
  
const LandingPage = () => {


  return (
    <span class="landing">
    <p>Welcome to Pokémon!</p> 
    <p>Login or Sign Up Here</p>
    <AuthenticationButton />
   </span>

  )
}
  
export default LandingPage;
