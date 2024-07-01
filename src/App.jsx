import React from 'react'
import Hero from './components/Hero'
import Overview from './components/Overview'
import About from './components/About'
import NewUpdates from './components/NewUpdates'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Branches from './components/Branches'

function App() {
  return (
    <>
    <Hero />
    <Overview />
    <About />
    <Services />
    <NewUpdates />
    <Gallery/>
    <Reviews />
    <Branches />
    <Contact />
    <Footer/>
    </>
  )
}

export default App