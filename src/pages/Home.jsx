import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Navigate from '../components/Navigate'
import About from '../components/About'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Navigate/>
      <About/>
      <Footer/>

    </div>
  )
}

export default Home
