import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Documentation from './components/Documentation';
import Disclaimer from './components/Disclaimer';
import Network from './components/Network';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Documentation" element={<Documentation />} />
        <Route path="/Network" element={<Network />} />
        <Route path="/Disclaimer" element={<Disclaimer />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
