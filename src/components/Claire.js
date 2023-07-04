import React, { useState } from 'react';
import XmlComponent from './XmlComponent';
import Sidebar from './Sidebar';

const Claire = () => {
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
    <div className='cielo1'>
        <div className='sidebar-top'>
        <Sidebar sections={sections} onSectionClick={handleSectionClick} />
      <div className="main-content">
        {/* Render the text of the current section */}
        {sections.find((section) => section.id === currentSection)?.text}
      </div>
        </div>
      <XmlComponent />
    </div>
  );
};

export default Claire;
