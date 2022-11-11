import React from 'react'
import Hero from '../Components/Hero'
import News from '../Components/News'
import About from '../Components/About'
import Publications from '../Components/Publications'

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <News />
      <About />
      <Publications />
    </div>
  )
}

export default Home