import React from 'react'
import Hero from "../components/Hero.jsx"
import Slide2 from '../components/Slide2.jsx'

const Homepage = () => {
  return (
    <div className='selection:bg-zinc-600'>
      <Hero />
      <Slide2 />
    </div>  
  )
}

export default Homepage