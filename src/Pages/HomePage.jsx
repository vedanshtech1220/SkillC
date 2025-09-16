import React from 'react';
import LandingPage from '../components/LandingPage';
import Marque from '../components/Marque';
import Intro from '../components/Intro';
import OurWork from '../components/OurWork';
import Eyes from '../components/Eyes';
import About from '../components/About';

function HomePage() {
  return (
    <>
      <LandingPage />
      <Marque />
      <div id="about-us">
        <Intro /> 
      </div>
      <div id="our-work">
        <OurWork /> 
      </div>
      <Eyes /> 
    </>
  );
}

export default HomePage;