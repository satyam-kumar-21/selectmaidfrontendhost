import React from 'react'
import Hero from './Hero'
import Overview from './Overview'
import About from './About'
import NewUpdates from './NewUpdates'
import Gallery from './Gallery'
import Reviews from './Reviews'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'
import Branches from './Branches'
import FixedButtons from './FixedButtons '

function Home() {
  return (
    <>
    <Hero />
   // <Overview />
    <About />
    <Services />
    <NewUpdates />
    <Gallery/>
    <Reviews />
    <Branches />
    <Contact />
    <Footer/>
    <FixedButtons />
    </>
  )
}

export default Home