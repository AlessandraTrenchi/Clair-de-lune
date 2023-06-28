import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> {/* Use Link instead of <a> */}
        </li>
        <li>
          <Link to="/documentation">Documentation</Link>
        </li>
        <li>
          <Link to="/claire">Claire de Lune</Link>
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
//The Link component ensures that the navigation happens within the React application without triggering a full page reload
export default Navbar;
