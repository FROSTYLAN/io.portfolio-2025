import { NavBar, Hero, Techs, AboutMe, Projects, Experience, Footer } from './components/organisms';
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <div id="inicio">
        <Hero />
      </div>
      <Techs />
      <div id="sobre-mi">
        <AboutMe />
      </div>
      <Projects />
      <div id="experiencia">
        <Experience />
      </div>
      <div id="contacto">
        <Footer />
      </div>
    </>
  )
}

export default App
