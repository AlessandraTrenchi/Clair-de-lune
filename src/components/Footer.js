import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>&copy; 2023 Alessandra Trenchi and Chloi Papadopoulou</p>
        <p>
          Website and encoding developed for the course of{' '}
          <Link to="https://www.unibo.it/it/didattica/insegnamenti/insegnamento/2022/467035">
            <i>Digital Text in the Humanities</i>
          </Link>{' '}
          held by Professor{' '}
          <Link to="https://www.unibo.it/sitoweb/tiziana.mancinelli2">Tiziana Mancinelli</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
