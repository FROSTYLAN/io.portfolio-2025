import styled from 'styled-components';
import { Container, Logo, MobileMenuButton } from '../../atoms';
import { useState, useEffect } from 'react';

const NavBarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled ? 'rgba(20, 20, 20, 0.35)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'saturate(150%) blur(12px)' : 'none'};
  -webkit-backdrop-filter: ${props => props.scrolled ? 'saturate(150%) blur(12px)' : 'none'};
  border-bottom: ${props => props.scrolled ? '1px solid rgba(255, 255, 255, 0.12)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 6px 20px rgba(0,0,0,0.15)' : 'none'};
  transition: all 0.3s ease;
  padding: ${props => props.scrolled ? '10px 0' : '18px 0'};
  
  @media (max-width: 768px) {
    padding: ${props => props.scrolled ? '8px 0' : '14px 0'};
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 280px;
    height: 100vh;
    background: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 100px;
    gap: 24px;
    transition: right 0.3s ease;
    z-index: 999;
  }
`;

const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-family: Inter, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  
  &:hover {
    color: #b9ff66;
    background: rgba(185, 255, 102, 0.1);
  }
  
  &.active {
    color: #b9ff66;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      background: #b9ff66;
      border-radius: 50%;
      box-shadow: 0px 2px 2px 0px #ffffff40;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 24px;
    width: 100%;
    text-align: center;
    
    &.active::after {
      bottom: 4px;
    }
  }
`;

const MobileOverlay = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 998;
  }
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

    const handleScrollActive = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      // Activar 'Contacto' cuando se llega al final de la página
      const totalScrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      const nearBottomOffset = 20; // activar un poco antes de llegar al fondo
      const atBottom = window.innerHeight + window.scrollY >= totalScrollHeight - nearBottomOffset;
      if (atBottom) {
        setActiveSection('contacto');
        return;
      }

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollActive);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollActive);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 90;
      const rectTop = element.getBoundingClientRect().top + window.scrollY;
      const targetTop = Math.max(rectTop - navOffset, 0);
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
      setActiveSection(sectionId);
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
            <Logo hideOnDesktop={true}>
              Charles<span>.</span>
            </Logo>
            
            <NavLinks isOpen={mobileMenuOpen}>
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  className={activeSection === item.id ? 'active' : ''}
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                >
                  {item.label}
                </NavLink>
              ))}
            </NavLinks>
            
            <MobileMenuButton 
              isOpen={mobileMenuOpen}
              onClick={toggleMobileMenu}
            />
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
