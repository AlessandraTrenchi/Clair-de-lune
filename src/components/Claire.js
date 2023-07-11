import Carousel from './Carousel';
import Footer from './Footer';
import React, { useState } from 'react';
import XmlComponent from './XmlComponent';
import Sidebar from './Sidebar';

const Claire = () => {
  const images = [
    '/src/images/lune.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    'https://example.com/image4.jpg',
  ];
  const [currentSection, setCurrentSection] = useState('');
  const handleSectionClick = (sectionId) => {
    setCurrentSection(sectionId);
  };
  // Define your sections with corresponding XML text
  const sections = [
    { id: 'Portfolio', text: 'XML text for Portfolio' },
    { id: 'analytics', text: 'XML text for Analytics' },
    { id: 'dashboard', text: 'XML text for Performance' },
    { id: 'reports', text: 'XML text for Reports' },
  ];

  return (
    <>
    <div className='nett'>
      <h1>Select the text</h1>
      <Carousel images={images} />
    </div>
    <div className='sidebar-top'>
        <Sidebar sections={sections} onSectionClick={handleSectionClick} />
      <div className="main-content">
        {/* Render the text of the current section */}
        {sections.find((section) => section.id === currentSection)?.text}
      </div>
        </div>
      <XmlComponent />
    <Footer/>
    </>
  );
};

export default Claire;
