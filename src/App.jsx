import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Research from './components/Research'
import Competitions from './components/Competitions'
import Projects from './components/Projects'
import OtherWorks from './components/OtherWorks'
import Volunteering from './components/Volunteering'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <div className="pageWrapper">
        <div className="contentContainer">
          <Hero />
          <div className="sectionGap" id="about"><About /></div>
          <div className="sectionGap" id="skills"><Skills /></div>
          <div className="sectionGap" id="research"><Research /></div>
          <div className="sectionGap" id="competitions"><Competitions /></div>
          <div className="sectionGap" id="projects"><Projects /></div>
          <div className="sectionGap" id="other-works"><OtherWorks /></div>
          <div className="sectionGap" id="volunteering"><Volunteering /></div>
          <div className="sectionGap" id="education"><Education /></div>
          <div className="sectionGap" id="contact"><Contact /></div>
        </div>
        <footer>
          <span>G.M.M. Miftahul Alam Adib, 2026</span>
        </footer>
      </div>
    </>
  )
}

export default App
