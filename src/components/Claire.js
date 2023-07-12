
import Carousel from './Carousel';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import XmlComponent from './XmlComponent';
import Sidebar from './Sidebar';
import '../index.css';

const Claire = () => {
  const images = [
    { src: 'https://tse2.mm.bing.net/th?id=OIP.hlxUa6fXKdaqVuBLuNq4vQHaHa&pid=Api&P=0&h=180', xmlId: 'les-bijoux', className:'bijoux' },
    { src: 'https://tse2.explicit.bing.net/th?id=OIP.DYpK6ZOo9s5VcwyaGg_mGAHaKh&pid=Api&P=0&h=180', xmlId: 'clair-de-lune', className:'bijoux' },
    { src: ' https://tse4.mm.bing.net/th?id=OIP.CCexfoRMYzSZayzxyb1BvAHaH8&pid=Api&P=0&h=180', xmlId: 'le-loup', className:'bijoux' },
    { src: 'https://tse2.mm.bing.net/th?id=OIP.nw7zC5s6Vc8cEAWGLYBX-gHaFv&pid=Api&P=0&h=180', xmlId: "un-coup-d'etat", className:'bijoux' },
    { src: 'https://tse4.mm.bing.net/th?id=OIP.tNEBQlE-37Ss4zJ2wwGivAHaHa&pid=Api&P=0&h=180', xmlId: "l'enfant", className:'bijoux' },
    { src: 'https://tse4.mm.bing.net/th?id=OIP.uE_U5iEmjltNrkHc85u-tgHaKe&pid=Api&P=0&h=180', xmlId: "conte-de-noel", className:'bijoux' },
    { src: 'https://tse1.mm.bing.net/th?id=OIP.uFSlYyB7TRlLAEFIpr5_UwHaIP&pid=Api&P=0&h=180', xmlId: "reine-hortense", className:'bijoux' },
    { src: 'https://tse2.mm.bing.net/th?id=OIP.K66ExGCP31eHF6fLttISDwHaFj&pid=Api&P=0&h=180', xmlId: "le-perdon", className:'bijoux' },
    { src: 'https://tse2.mm.bing.net/th?id=OIP.t2edsMn7aFTIVav8TsZWBwHaEK&pid=Api&P=0&h=180', xmlId: "legende-mont-saint-michel", className:'bijoux' },
    { src: 'https://tse3.explicit.bing.net/th?id=OIP.6MNYlEeLqrv60hn445EPOQHaKy&pid=Api&P=0&h=180', xmlId: "une-veuve", className:'bijoux' },
    { src: 'https://tse3.mm.bing.net/th?id=OIP.gX8fs1mLVA0BMnkQpCBm-QHaIr&pid=Api&P=0&h=180', xmlId: "mlle-cocotte", className:'bijoux' },
    { src: ' https://tse2.mm.bing.net/th?id=OIP.D9VmXZhVZ-gJ4DH6TWcPKwHaEK&pid=Api&P=0&h=180', xmlId: "apparition", className:'bijoux' }
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
          <h1>Clair de Lune Digital Edition</h1>
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
