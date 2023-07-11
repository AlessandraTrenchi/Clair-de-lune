import Carousel from './Carousel';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
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
  const [sections, setSections] = useState([]);

  useEffect(() => {
    // Load the XML content from bijoux.xml
    const loadXmlContent = async () => {
      try {
        const response = await fetch('bijoux.xml');
        const xmlText = await response.text();
        // Process the XML text and extract the IDs
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'application/xml');
        const xmlIds = Array.from(xmlDoc.getElementsByTagName('id')).map(
          (node) => node.textContent
        );
        // Create section objects using the XML IDs
        const newSections = xmlIds.map((id) => ({ id, text: '' }));
        setSections(newSections);
      } catch (error) {
        console.error('Error loading XML content:', error);
      }
    };

    loadXmlContent();
  }, []);

  const handleSectionClick = (sectionId) => {
    try {
      const section = sections.find((section) => section.id === sectionId);
      if (section) {
        setCurrentSection(sectionId);
      } else {
        throw new Error('Section not found');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='nett'>
        <h1>Select the text</h1>
        <Carousel images={images} />
      </div>
      <div className='sidebar-top'>
        <Sidebar sections={sections} onSectionClick={handleSectionClick} />
      </div>
      <Footer />
      <XmlComponent />
    </>
  );
};

export default Claire;