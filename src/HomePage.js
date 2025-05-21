import React from 'react'
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";

export const HomePage = () => {
  return (
    <div>
        <NavBar/>
      <Intro/>
      <Skills/>
      {/* <Projects/> */}
      {/* <Services/> */}
      <About/>
      <Contact/>
    </div>
  )
}
