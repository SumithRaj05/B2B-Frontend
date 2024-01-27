import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isScrolled = scrollPosition > 60;

      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
  className={`navbar navbar-expand-lg navbar-light ${scrolled ? 'bg-white nav-bor' : 'bg-transparent1'} fixed-top`}
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
        </a>
        
        {/* Hamburger icon for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={toggleMobileMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={`nav-link ${scrolled ? 'text-dark font-weight-bold' : 'text-white font-weight-bold mob-noscroll'}`} href="#">
                Blog
              </a>
            </li>
            {/* <li className={`nav-item ${scrolled ? 'text-dark font-weight-bold' : 'text-white font-weight-bold'}`}>|</li> */}
            <li className="nav-item">
              <a className={`nav-link ${scrolled ? 'text-dark font-weight-bold' : 'text-white font-weight-bold mob-noscroll'}`} href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${scrolled ? 'text-dark font-weight-bold' : 'text-white font-weight-bold mob-noscroll'}`} href="/signup">
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
