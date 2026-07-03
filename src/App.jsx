import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import ParticlesBackground from './components/ParticlesBackground.jsx'
import CustomCursor from './components/CustomCursor.jsx';

const App = () => {
  return (
    <div className='relative gradient text-white'>
      <CustomCursor/>
      {/* <ParticlesBackground/> */}
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;