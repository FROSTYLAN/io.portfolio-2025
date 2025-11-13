import { NavBar, Hero, Techs, AboutMe, Projects, Experience, Footer } from './components/organisms';
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <div id="inicio">
        <Hero>
          <p>Hola, Soy <span>Charles Castillo</span></p>
          <h1>Desarrollador Web</h1>
          <p>
            Conoce mi trabajo y descubre cómo convierto ideas en aplicaciones web dinámicas y modernas.
          </p>
          <section>
            <button>Contáctame</button>
            <button>Descarga mi CV</button>
          </section>
          <section>
            <div>
              <h3>5</h3>
              <p>years of experience</p>
            </div>
            <div>
              <h3>13</h3>
              <p>certifications of technologies</p>
            </div>
          </section>
        </Hero>
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
