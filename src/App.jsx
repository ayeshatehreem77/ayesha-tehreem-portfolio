import { useState } from 'react'
// components

import './App.css'
import HeroSection from './components/sections/Hero'
import Navbar from './components/sections/Navbar'
import About from './components/sections/About'
import TechStack from './components/TechStack/TechStack'
import FeaturedProjects from './components/projects/FeaturedProjects'
import Experience from './components/experience/Experience'
import ProcessSection from './components/process/ProcessSection'
import ExploringSection from './components/exploring/ExploringSection'
import ContactSection from './components/contact/ContactSection'
import Footer from './components/sections/Footer'





function App() {


  return (
    <>
      <div className="min-h-screen bg-[#0f0e13] text-white flex flex-col pb-16">
        <Navbar />
        <HeroSection />
        <About />
        <Experience />
        <FeaturedProjects />
        <TechStack />
        <ProcessSection />
        <ExploringSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}

export default App
