import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext.jsx';

const Button = () => {

  const {toggleTheme, theme} = useContext(ThemeContext)

  return (
    <button
      className={theme ? 'btn-toggle' : 'btn-toggle btn-dark'}
      onClick={toggleTheme}
    >
      {theme ? 'LIGHT' : 'DARK'}</button>
  );
};

export default Button;