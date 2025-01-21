import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className='text-black'>Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;
