import Carousel from './Carousel';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import XmlComponent from './XmlComponent';
import Sidebar from './Sidebar';
import '../index.css';
const Claire = () => {
  const images = [
    { src: '../../images/lune.jpg', xmlId: 'clair-de-lune' },
    { src: '../../images/l', xmlId: 'image2-xml-id' },
    { src: 'https://example.com/image3.jpg', xmlId: 'image3-xml-id' },
    { src: 'https://example.com/image4.jpg', xmlId: 'image4-xml-id' },
  ];
  const [currentImage, setCurrentImage] = useState(null);
  const [xmlContent, setXmlContent] = useState('');

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  useEffect(() => {
    if (currentImage) {
      loadXmlContent(currentImage.xmlId);
    }
  }, [currentImage]);

  // Load the XML content for the selected image
  const loadXmlContent = async (xmlId) => {
    try {
      const response = await fetch('bijoux.xml');
      const xmlText = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

      // Find the XML fragment with the corresponding ID
      const fragment = xmlDoc.getElementById(xmlId);
      if (fragment) {
        setXmlContent(fragment.outerHTML);
      } else {
        throw new Error('XML fragment not found');
      }
    } catch (error) {
      console.error('Error loading XML content:', error);
    }
  };

  return (
    <>
      <div className='nett'>
        <h1>Select the text</h1>
        <Carousel images={images} onImageClick={handleImageClick} />
      </div>
      <div className='sidebar-top'>
        <Sidebar sections={[]} />
        <div className="main-content">
          {/* Render the XML content for the selected image */}
          {xmlContent && <XmlComponent xmlText={xmlContent} />}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Claire;
