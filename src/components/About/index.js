import React from 'react';
import './index.css';

const About = ({ theme }) => {
  const darkModeClass = theme === 'dark' ? 'dark-mode' : 'light-mode';

  return (
    <>
      <div className={`home-container1 ${darkModeClass}`}>
    
        <div className='name-container1'>
          <h1 className='heading1'><span className='message'>T</span>his is it. :)</h1>
          <hr className='horizantal-line1' />
        </div>
        <div className="home-content1">
          <p className='paragraph1'>Jahnavi Undavalli is an Indian <span className='message'> UI/UX Designer & Front End Developer </span>with a passion for designing beautiful and functional user experiences. Typically, he's Driven & permanently Curious. He's obsessed things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his painting on the wall when he was 11.</p>

          <p className='paragraph2'>He holds a <span className='message'>bachelor's degree in Computer Applications.</span> During his graduation, he has been actively involved in the web design community for the last 3 years. He has designed websites for small businesses, events, nonprofits, and more. Currently, he's based in Bihar, India, where he's working as an independent creative.</p>

          <p className='paragraph3'>His interests, however, extend beyond the web, and he loves helping people with branding and print design. He even loves designing <span className='message'>3D floor plans.</span></p>

          <p className='paragraph4'>When he's not designing, he's probably hanging out with his girlfriend series, sketching, or messing around with something inspired by YouTube tutorials.</p>
        </div>
        <hr className='horizantal-line1' />
      </div>
    </>
  );
}

export default About;
