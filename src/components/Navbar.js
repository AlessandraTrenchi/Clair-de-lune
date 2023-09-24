import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import '../index.css';

const Navbar = () => {
  return (
    <nav>
      <ul className='container cyan brackets'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Documentation">Documentation</Link>
        </li>
        <li>
          <Link to="/Clair">Clair de Lune</Link>
        </li>
        <li>
          <Link to="/Network">Network Analysis</Link>
        </li>
        <li>
          <Link to="/Disclaimer">Disclaimer</Link>
        </li>
        <li>
          <Link to="/About">About us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
