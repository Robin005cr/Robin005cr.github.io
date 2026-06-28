import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <p className="footer__brand">Robin CR</p>
          <p className="footer__tagline">Embedded · Robotics · ADAS</p>
        </div>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/robin-cr/"
            className="footer__icon"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin" />
          </a>
          <a
            href="https://github.com/robin005cr/"
            className="footer__icon"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github" />
          </a>
          <a
            href="https://wa.me/918848667963"
            className="footer__icon"
            title="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-whatsapp" />
          </a>
          <a
            href="https://www.instagram.com/robin_c_r_?igdh=MThvOTJ0dDk0MDZzNA=="
            className="footer__icon"
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram" />
          </a>
        </div>
        <p className="footer__copy">&copy; {new Date().getFullYear()} Robin CR.</p>
      </div>
    </footer>
  );
};

export default Footer;
