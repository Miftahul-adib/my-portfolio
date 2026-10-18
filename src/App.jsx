import React from 'react'
import Cover from './components/Cover'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Research from './components/Research'
import Projects from './components/Projects'
import Competitions from './components/Competitions'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Cover />
        <Hero />
        <About />
        <Research />
        <Projects />
        <Competitions />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
