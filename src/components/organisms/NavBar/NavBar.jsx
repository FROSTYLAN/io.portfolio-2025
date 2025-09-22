import React from 'react';
import './Navbar.css';

const Navbar = () => {
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

export default Navbar;