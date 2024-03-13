import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Education from './components/education/Education';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Courses from './components/courses/Courses';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import FooterBottom from './components/footer/FooterBottom';

function App() {

  return (
    <>
      <div className='w-full h-auto bg-bodyColor text-lightText  px-4'>
        <Navbar />
        <div className='max-w-screen-xl mx-auto '>
          <Home />
          <Education />
          <Projects />
          <Skills />
          <Courses />
          <Contact />
          <Footer />
          <FooterBottom />

        </div>
      </div>
    </>
  )
}

export default App;

