import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__title">Robin CR</p>
      <div className="footer__social">
        <a
          href="https://www.instagram.com/robin_c_r_?igdh=MThvOTJ0dDk0MDZzNA=="
          className="footer__icon"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className='bx bxl-instagram'></i>
        </a>
        <a
          href="https://www.linkedin.com/in/robin-cr/"
          className="footer__icon"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className='bx bxl-linkedin'></i>
        </a>
        <a
          href="https://wa.me/918848667963"
          className="footer__icon"
          target="_blank"
          title="WhatsApp"
          rel="noopener noreferrer"
        >
          <i className='bx bxl-whatsapp'></i>
        </a>
      </div>
      <p className="footer__copy">&copy; All rights reserved</p>
    </footer>
  );
};

export default Footer;

