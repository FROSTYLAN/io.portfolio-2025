import { NavBar, Hero, TechSection, AboutSection, ProjectsSection, ExperienceSection, Footer } from './components/organisms';
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <div id="inicio">
        <Hero />
      </div>
      <TechSection />
      <div id="sobre-mi">
        <AboutSection />
      </div>
      <ProjectsSection />
      <div id="experiencia">
        <ExperienceSection />
      </div>
      <div id="contacto">
        <Footer />
      </div>
    </>
  )
}

export default App