import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Documentation from './components/Documentation';
import Disclaimer from './components/Disclaimer';

const App = () => {
  const [selectedPage, setSelectedPage] = useState('home');

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  return (
    <Router>
      <Navbar onPageChange={handlePageChange} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Render additional content based on the selected page */}
      {selectedPage === 'home' && <Home />}
      {selectedPage === 'documentation' && <Documentation />}
      {selectedPage === 'disclaimer' && <Disclaimer />}
      {selectedPage === 'about' && <About />}
    </Router>
  );
};

export default App;
