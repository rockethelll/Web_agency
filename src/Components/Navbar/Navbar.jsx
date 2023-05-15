import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const Navbar = () => {
  return (
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/works'>Works</Link>
          <Button />
        </nav>
  );
};

export default Navbar;