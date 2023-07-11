
import Carousel from './Carousel';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import XmlComponent from './XmlComponent';
import Sidebar from './Sidebar';
import '../index.css';

const Claire = () => {
  const images = [
    { src: '../../images/lune.jpg', xmlId: 'les-bijoux' },
    { src: 'https://it.m.wikipedia.org/wiki/File:Guy_de_Maupassant_-_Clair_de_lune.djvu#/media/File%3AGuy_de_Maupassant_-_Clair_de_lune.djvu', xmlId: 'clair-de-lune' },
    { src: '../../images/l', xmlId: 'le-loup' },
    { src: 'https://example.com/image3.jpg', xmlId: "un-coup-d'etat" },
    { src: 'https://example.com/image4.jpg', xmlId: "l'enfant" },
    { src: 'https://example.com/image4.jpg', xmlId: "conte-de-noel" },
    { src: 'https://example.com/image4.jpg', xmlId: "reine-hortense" },
    { src: 'https://example.com/image4.jpg', xmlId: "le-perdon" },
    { src: 'https://example.com/image4.jpg', xmlId: "legende-mont-saint-michel" },
    { src: 'https://example.com/image4.jpg', xmlId: "une-veuve" },
    { src: 'https://example.com/image4.jpg', xmlId: "apparition" }
  ];
  const [currentImage, setCurrentImage] = useState(null);
  const [xmlContent, setXmlContent] = useState('');
  const [xmlIds, setXmlIds] = useState([]);

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  useEffect(() => {
    if (currentImage) {
      loadXmlContent(currentImage.xmlId);
    }
  }, [currentImage]);

  useEffect(() => {
    loadXmlIds();
  }, []);

  const loadXmlIds = async () => {
    try {
      const response = await fetch('bijoux.xml');
      const xmlText = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

      const ids = Array.from(xmlDoc.querySelectorAll('[xml\\:id]')).map((element) =>
        element.getAttribute('xml:id')
      );

      setXmlIds(ids);
    } catch (error) {
      console.error('Error loading XML IDs:', error);
    }
  };

  const loadXmlContent = async (xmlId) => {
    try {
      const response = await fetch('bijoux.xml');
      const xmlText = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

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

  const handleSectionClick = (sectionId) => {
    // Handle the section click event
  };

  return (
    <>
      <div className='nett'>
        <div className='carr'>
          <h1>Claire de Lune Digital Edition</h1>
        <h2>Select the text</h2>
        <Carousel images={images} onImageClick={handleImageClick} /></div>
      <div className='sidebar-top'>
        <Sidebar sections={xmlIds} onSectionClick={handleSectionClick} />
        <div className="main-content">
          {/* Render the XML content for the selected image */}
          {xmlContent && <XmlComponent xmlText={xmlContent} />}
        </div>
      </div></div>
      <Footer/>
    </>
  );
};

export default Claire;
