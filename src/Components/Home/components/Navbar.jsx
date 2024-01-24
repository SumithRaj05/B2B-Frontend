import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <nav
    className={`navbar navbar-expand-lg navbar-light ${scrolled ? 'bg-white nav-bor' : 'bg-transparent'} fixed-top`}
    style={{ transition: 'background 0.3s, color 0.3s' }}
  >
    <div className="container" style={{ maxWidth: '1100px' }}>
    <a className={`navbar-brand ${scrolled ? 'text-dark font-weight-bold' : 'text-white font-weight-bold'}`} href="#">
      <img
        src="/home/bejiness-logo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Logo"
      />
      Bejiness.com
    </a>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className={`nav-link ${scrolled ? 'text-dark font-weight-bold' : 'text-white font-weight-bold'}`} href="#">
            Blog
          </a>
        </li>
        <li  className={`nav-item ${scrolled ? 'text-dark font-weight-bold' : 'text-white font-weight-bold'}`}>|</li>
        
        <li className="nav-item">
          <a className={`nav-link ${scrolled ? 'text-dark font-weight-bold' : 'text-white font-weight-bold'}`} href="#">
            Login
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${scrolled ? 'text-dark font-weight-bold' : 'text-white font-weight-bold'}`} href="#">
            Sign Up
          </a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  
);
};

export default Navbar;
