import styled from 'styled-components';
import { Container, Logo, MobileMenuButton } from '../../atoms';
import { Navigation, MobileMenu } from '../../molecules';
import { useState, useEffect } from 'react';

const NavBarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${props => props.scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};
  transition: all 0.3s ease;
  padding: ${props => props.scrolled ? '12px 0' : '20px 0'};
  
  @media (max-width: 768px) {
    padding: ${props => props.scrolled ? '10px 0' : '16px 0'};
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Cerrar menú móvil si está abierto
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <>
      <NavBarWrapper scrolled={scrolled}>
        <Container>
          <NavContent>
            <Logo>
              Charles<span>.</span>
            </Logo>
            
            <NavLinks isOpen={mobileMenuOpen}>
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </NavLink>
              ))}
            </NavLinks>
            
            <MobileMenuButton onClick={toggleMobileMenu}>
              {mobileMenuOpen ? '✕' : '☰'}
            </MobileMenuButton>
          </NavContent>
        </Container>
      </NavBarWrapper>
      
      <MobileOverlay 
        isOpen={mobileMenuOpen} 
        onClick={() => setMobileMenuOpen(false)} 
      />
    </>
  );
};

export default NavBar;