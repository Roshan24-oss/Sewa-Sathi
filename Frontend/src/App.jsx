import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
const App = () => {
  return (
    <div className='w-full h-full'>
      <Navbar/>
      <Hero className=" bg-pink-300 "/>
      <Footer/>
    
    </div>
  )
}

export default App
