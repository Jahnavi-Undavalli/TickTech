import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import './index.css';

const Footer = ({ theme }) => {
  const iconColor = theme === 'dark' ? 'white' : 'black';

  return (
    <footer className={`footer ${theme}`}>
      <div className='footer-container'>
        <div className="footer-icons">
          <a href="https://www.facebook.com">
            <FaFacebook className="footer-icon" style={{ color: iconColor }} />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram className="footer-icon" style={{ color: iconColor }} />
          </a>
          <a href="https://twitter.com">
            <FaTwitter className="footer-icon" style={{ color: iconColor }} />
          </a>
          <a href="https://github.com">
            <FaGithub className="footer-icon" style={{ color: iconColor }} />
          </a>
          <a href="https://www.linkedin.com">
            <FaLinkedin className="footer-icon" style={{ color: iconColor }} />
          </a>
          <a href="https://web.telegram.org">
            <FaTelegram className="footer-icon" style={{ color: iconColor }} />
          </a>
        </div>
        <div className="email-container">    
          <p className='email'>undavallijahnavi354@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
