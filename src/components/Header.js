import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', hash: '#home' },
    { path: '/', label: 'About me', hash: '#about' },
    { path: '/', label: 'Sections', hash: '#skills' },
    { path: '/', label: 'Projects', hash: '#project' },
    { path: '/', label: 'Contact', hash: '#contact' },
  ];

  const handleNavClick = (e, hash) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/${hash}`;
      return;
    }
    e.preventDefault();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const isActiveLink = (hash) => {
    if (location.pathname !== '/') return false;
    const element = document.querySelector(hash);
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return rect.top <= 100 && rect.bottom >= 100;
  };

  useEffect(() => {
    const handleScroll = () => {
      // Update active link on scroll
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;
      
      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 58;
        const sectionId = section.getAttribute('id');
        const navItem = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);
        
        if (navItem && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelectorAll('.nav__link').forEach(link => {
            link.classList.remove('active-link');
          });
          navItem.classList.add('active-link');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <Link to="/" className="nav__logo">Robin CR</Link>
        </div>

        <div className={`nav__menu ${menuOpen ? 'show' : ''}`} id="nav-menu">
          <ul className="nav__list">
            {navLinks.map((link, index) => (
              <li key={index} className="nav__item">
                <a
                  href={link.path === '/' ? link.hash : link.path}
                  className={`nav__link ${isActiveLink(link.hash) ? 'active-link' : ''}`}
                  onClick={(e) => handleNavClick(e, link.hash)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className='bx bx-menu'></i>
        </div>
        
        <div className={`theme-toggle ${isDark ? 'active' : ''}`} id="theme-toggle" onClick={toggleTheme}>
          <i className={isDark ? 'bx bx-sun' : 'bx bx-moon'}></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

