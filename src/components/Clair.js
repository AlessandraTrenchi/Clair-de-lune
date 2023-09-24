import Carousel from './Carousel';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import XmlComponent from './XmlComponent';
import Sidebar from './Sidebar';
import '../index.css';
import Emotions from './Emotions';
import XSLTFilePath from '../text/stile.xslt'; // Import the XSLT file

const emotionData = [
  {
    rdfAbout: 'http://130.192.212.225/fuseki/ArsEmotica-core#Joy',
    label: 'Joy',
  },
  // Aggiungi altri dati delle emozioni qui
];

const Clair = () => {
  const images = [

    { src: 'src/img/click_img.png', xmlId: 'bijoux', className:'bijoux', title: 'Les Bijoux' },
    { src: 'src/img/click_img.png', xmlId: 'clair-de-lune', className:'bijoux', title: 'Clair de Lune' },
    { src: 'src/img/click_img.png', xmlId: 'le-loup', className:'bijoux', title: 'Le Loup' },
    { src: 'src/img/click_img.png', xmlId: "coup-d-etat", className:'bijoux', title: "Un coup d'etat" },
    { src: 'src/img/click_img.png', xmlId: "l-enfant", className:'bijoux', title: "L'enfant" },
    { src: 'src/img/click_img.png', xmlId: "conte-de-noel", className:'bijoux', title: 'Conte de Noel' },
    { src: 'src/img/click_img.png', xmlId: "reine-hortense", className:'bijoux', title: 'La Reine Hortense' },
    { src: 'src/img/click_img.png', xmlId: "le-perdon", className:'bijoux', title: 'Le pardon' },
    { src: 'src/img/click_img.png', xmlId: "legende-mont-st-michel", className:'bijoux', title: 'La Legende du Mont Saint-Michel' },
    { src: 'src/img/click_img.png', xmlId: "une-veuve", className:'bijoux', title: 'Une veuve' },
    { src: 'src/img/click_img.png', xmlId: "mlle-cocotte", className:'bijoux', title: 'Mademoiselle Cocotte' },
    { src: 'src/img/click_img.png', xmlId: "apparition", className:'bijoux', title:'Apparition'}
  ];

  const [currentXmlId, setCurrentXmlId] = useState(null);
  const [currentTextUrl, setCurrentTextUrl] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Add this state


  const handleImageClick = (xmlId) => {
    setCurrentXmlId(xmlId);


    // Determine the corresponding texturl based on the selected xmlId
    const repo = 'https://raw.githubusercontent.com/AlessandraTrenchi/Clair-de-lune/main/src/text/';
    const texturl = repo + xmlId + '.xml';

    setCurrentTextUrl(texturl);
    // Show the sidebar when an item is clicked
   setIsSidebarVisible(true);
  };

  return (
    <>
      <div className='nett'>
        <div className='carr'>
          <div className='clair-container'>

            <h1>Clair de Lune Digital Edition</h1>
            <div className='centered-carousel'>
              <Carousel images={images} onImageClick={handleImageClick} />
            </div>
          </div>
          <div className='emotions'> <h3>Emotions</h3>
      <Emotions emotionData={emotionData} /></div>
          <div className="cont-tei">
          <div className='main-content'>
            {/* Render the XML content for the selected image */}
            {currentXmlId && <XmlComponent texturl={currentTextUrl} xslturl={XSLTFilePath} />}
          {isSidebarVisible && <Sidebar />} {/* Render the sidebar when isSidebarVisible is true */}

            {currentXmlId && <XmlComponent texturl={currentTextUrl} />}
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Clair;
