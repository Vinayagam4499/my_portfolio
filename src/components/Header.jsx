import React from 'react';

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <nav>
          <a href="#" className="logo">Vinay<span>agam</span></a>
          <div className="hamburger"><i className="fas fa-bars"></i></div>
          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
