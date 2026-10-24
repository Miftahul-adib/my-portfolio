import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
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
        <Hero />
        <Research />
        <Projects />
        <Competitions />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
