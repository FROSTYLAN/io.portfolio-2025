import { NavBar, Hero, Techs, AboutMe, Projects, Experience, Footer } from './components/organisms';
import ctaBg from './components/organisms/Footer/container.png';
import './App.css'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

const LoaderOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(60% 60% at 50% 50%, rgba(0, 255, 136, 0.08) 0%, rgba(0, 0, 0, 0.9) 80%);
  backdrop-filter: blur(6px);
  z-index: 9999;
`

const LoaderSpinner = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 3px solid rgba(185, 255, 102, 0.28);
  border-top-color: rgba(185, 255, 102, 1);
  animation: spin 0.9s linear infinite;
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`

function App() {
  const [appLoading, setAppLoading] = useState(true)

  useEffect(() => {
    const onLoad = () => setAppLoading(false)
    if (document.readyState === 'complete') {
      setAppLoading(false)
    } else {
      window.addEventListener('load', onLoad)
    }
    const timeout = setTimeout(() => setAppLoading(false), 2500)
    return () => {
      window.removeEventListener('load', onLoad)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      {appLoading && (
        <LoaderOverlay aria-hidden={!appLoading}>
          <LoaderSpinner />
        </LoaderOverlay>
      )}
      <NavBar />
      <div id="inicio">
        <Hero>
          <p className="hero__content--greeting">Hola, Soy <span className="hero__content--highlight">Charles Castillo</span></p>
          <h1 className="hero__content--title">Desarrollador Web</h1>
          <p className="hero__content--description">
            Conoce mi trabajo y descubre cómo convierto ideas en aplicaciones web dinámicas y modernas.
          </p>
          <section className="hero__content--button-container">
            <button
              className="hero__content--button--primary"
              onClick={() => window.open('https://wa.me/51977774529', '_blank', 'noopener,noreferrer')}
            >
              Contáctame
            </button>
            <button className="hero__content--button--secondary">Descarga mi CV</button>
          </section>
          <section className="hero__content--stats-container">
            <div className="hero__content--stats">
              <h3 className="hero__content--stats--number">5</h3>
              <p className="hero__content--stats--description">years of experience</p>
            </div>
            <div className="hero__content--stats">
              <h3 className="hero__content--stats--number">13</h3>
              <p className="hero__content--stats--description">certifications of technologies</p>
            </div>
          </section>
        </Hero>
      </div>
      <Techs />
      <div id="sobre-mi">
        <AboutMe />
      </div>
      <Projects />
      <div
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center 100%',
          backgroundSize: '80%',
        }}
      >
        <div id="experiencia">
          <Experience />
        </div>
        <div id="contacto">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
