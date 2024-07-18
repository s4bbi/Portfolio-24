import React from 'react'
import Header from '../components/Header.jsx'
import Hero from "../components/Hero.jsx"
import Slide2 from '../components/Slide2.jsx'
import Services from '../components/Services.jsx'
import Projects from '../components/Projects.jsx'
import About from '../components/About.jsx'

const Homepage = () => {
  return (
    <div className='selection:bg-zinc-600'>
      <Header />
      <Hero />
      <Slide2 />
      <Services />
      <Projects />
      <About />
    </div>  
  )
}

export default Homepage