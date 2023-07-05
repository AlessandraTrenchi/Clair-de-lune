import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import '../index.css';

const Navbar = () => {
  return (
    <nav>
      <ul className='container cyan brackets'>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/documentation">Documentation</Link>
        </li>
        <li>
          <Link to="/claire">Claire de Lune</Link>
        </li>
        <li>
          <Link to="/network">Network Analysis</Link>
        </li>
        <li>
          <Link to="/disclaimer">Disclaimer</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
