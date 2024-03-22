import React from 'react';
import { Link } from 'react-router-dom';
import { MdDarkMode } from 'react-icons/md'; 
import { FiSun } from 'react-icons/fi';
import './index.css';

const Header = ({ theme, toggleTheme }) => {
  const darkModeClass = theme === 'dark' ? 'dark-mode' : '';
  const borderBottomClass = theme === 'dark' ? 'no-border-bottom' : '';
  const logoClass = theme === 'dark' ? 'dark-logo' : '';
  return (
    <nav className={`nav-header ${darkModeClass} ${borderBottomClass}`}>
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/" className="nav-link"> 
            <img
             className={`website-logo ${logoClass}`}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiEa-9mcv9rcxqrtVZjAjMhrCbaMEXm7P9QjiLYSgv0w&s"
              alt="website logo"
            />
          </Link>
        </div>
        <div className="nav-bar-large-container">
        <Link to="/" className="nav-link"> 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiEa-9mcv9rcxqrtVZjAjMhrCbaMEXm7P9QjiLYSgv0w&s" alt="" className={`website-logo ${logoClass}`}/>
        </Link>
          <Link to="/" className="nav-link"> 
            <h1 className='heading'>Jahnavi Undavalli</h1>
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link"> 
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/about" className="nav-link"> 
                About
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/about" className="nav-link">
                Resume
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/about" className="nav-link">
                Skills
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/about" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-menu-item">
              <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
                {theme === 'light' ? <MdDarkMode /> : <FiSun className='image-light' />}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
