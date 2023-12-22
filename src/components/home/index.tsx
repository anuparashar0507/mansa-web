import Hero from "./Hero";
import About from "./About";
import Stats from "./Stats";
// import Event from "./Event";
import CTA from "./CTA";
import Contact from "./Contact";

import React from 'react'

const Home : React.FC = () => {
  return (
    <>
    <Hero />
    <About />
    <Stats />
    {/* <Event  /> */}
    <CTA />
    <Contact />
    </>
  )
}

export default Home