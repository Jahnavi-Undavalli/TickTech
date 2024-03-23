import React from 'react';

import './index.css';

const MainContent = ({ theme }) => { 
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <div className="leaf">
            <p>Hello!</p>
          </div>
          <h1 className={`home-heading ${theme === 'dark' ? 'dark-mode' : ''}`}>I'm <span className='ceo-name'>Anish </span></h1>
          <img
            src="https://media.istockphoto.com/id/825083568/photo/proud-latin-man.webp?b=1&s=170667a&w=0&k=20&c=CyG-7qRsTApt2se9eMhc-iPBHMj5Yj-ISytCWd3uZzQ="
            alt="profile-image"
            className="profile-mobile-img"
          />
          <p className={`home-description ${theme === 'dark' ? 'dark-mode' : ''}`}>
            I'm a UI/UX Designer, Front-end Developer, and Thinker <br/> Based in India.
          </p>
          <div className='buttons-container'>
            <button type="button" className="button1">
              Download CV
            </button>
            <button type="button" className="button2">
              Get in Touch!
            </button>
          </div>
        </div>
        <img
          src="https://media.istockphoto.com/id/825083568/photo/proud-latin-man.webp?b=1&s=170667a&w=0&k=20&c=CyG-7qRsTApt2se9eMhc-iPBHMj5Yj-ISytCWd3uZzQ="
         
          className="profile-image"
          alt="Profile Image"
        />
      </div>
    </>
  );
}

export default MainContent;
