import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='navbar' role="navigation" aria-label="Main Navigation">
      <img src={logo} className='logo' alt="Personal logo" />

      <div className='hamburger' onClick={toggleMenu} aria-label="Toggle navigation menu" role="button" tabIndex={0}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navmenu ${menuOpen ? 'active' : ''}`}>
        <li><AnchorLink className='anchor-tag' href="#home">Home</AnchorLink></li>
        <li><AnchorLink className='anchor-tag' offset={50} href="#about">About Me</AnchorLink></li>
        <li><AnchorLink className='anchor-tag' offset={50} href="#services">Services</AnchorLink></li>
        <li><AnchorLink className='anchor-tag' offset={50} href="#portfolio">Portfolio</AnchorLink></li>
        <li><AnchorLink className='anchor-tag' offset={50} href="#contact">Contact</AnchorLink></li>
      </ul>

      <div className='navconnect'>
        <AnchorLink className='anchor-tag' offset={50} href="#contact">Connect With Me</AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;