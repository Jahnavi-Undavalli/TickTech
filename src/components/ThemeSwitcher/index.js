import React from 'react';
import { MdDarkMode } from 'react-icons/md'; 

import {FiSun} from 'react-icons/fi';

class ThemeSwitcher extends React.Component {
  render() {
    const { theme, toggleTheme } = this.props;
    return (
      <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
        {theme === 'light' ? <MdDarkMode /> : <FiSun />}
      </div>
    );
  }
}

export default ThemeSwitcher;
