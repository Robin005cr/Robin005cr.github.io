import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { label: 'About', hash: '#about' },
    { label: 'Domains', hash: '#domains' },
    { label: 'Projects', hash: '#project' },
    { label: 'Contact', hash: '#contact' },
  ];

  const handleNavClick = (e, hash) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${hash.replace('#', '')}`;
      return;
    }
    e.preventDefault();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY + 100;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav__link[data-section="${id}"]`);

        if (link && scrollY >= top && scrollY < top + height) {
          document.querySelectorAll('.nav__link').forEach(l => l.classList.remove('active-link'));
          link.classList.add('active-link');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`l-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <Link to="/" className="nav__logo">
          <span className="nav__logo-dot" />
          Robin CR
        </Link>

        {isHomePage ? (
          <div className={`nav__menu ${menuOpen ? 'show' : ''}`}>
            <ul className="nav__list">
              {navLinks.map((link) => (
                <li key={link.hash} className="nav__item">
                  <a
                    href={link.hash}
                    className="nav__link"
                    data-section={link.hash.replace('#', '')}
                    onClick={(e) => handleNavClick(e, link.hash)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <Link to="/" className="nav__back">
            <i className="bx bx-arrow-back" />
            Back to Home
          </Link>
        )}

        <div className="nav__actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i className={isDark ? 'bx bx-sun' : 'bx bx-moon'} />
          </button>
          {isHomePage && (
            <button
              type="button"
              className="nav__toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <i className={menuOpen ? 'bx bx-x' : 'bx bx-menu'} />
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
