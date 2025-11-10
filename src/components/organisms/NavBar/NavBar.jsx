import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#inicio" className="nav-item active">
          Inicio
          <span className="active-indicator"></span>
        </a>
        <a href="#sobre-mi" className="nav-item">
          Sobre mí
        </a>
        <a href="#experiencia" className="nav-item">
          Experiencia
        </a>
        <a href="#contacto" className="nav-item">
          Contacto
        </a>
      </div>
    </nav>
  );
};

export default Navbar;