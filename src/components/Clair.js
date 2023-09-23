import Carousel from './Carousel';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import XmlComponent from './XmlComponent';
import '../index.css';
import Emotions from './Emotions';

const emotionData = [
  {
    rdfAbout: 'http://130.192.212.225/fuseki/ArsEmotica-core#Joy',
    label: 'Joy',
  },
  // Aggiungi altri dati delle emozioni qui
];

const Clair = () => {
  const images = [
    { src: 'https://tse2.mm.bing.net/th?id=OIP.hlxUa6fXKdaqVuBLuNq4vQHaHa&pid=Api&P=0&h=180', xmlId: 'bijoux', className:'bijoux', title: 'Les Bijoux' },
    { src: 'https://tse2.explicit.bing.net/th?id=OIP.DYpK6ZOo9s5VcwyaGg_mGAHaKh&pid=Api&P=0&h=180', xmlId: 'clair-de-lune', className:'bijoux', title: 'Clair de Lune' },
    { src: ' https://tse4.mm.bing.net/th?id=OIP.CCexfoRMYzSZayzxyb1BvAHaH8&pid=Api&P=0&h=180', xmlId: 'le-loup', className:'bijoux', title: 'Le Loup' },
    { src: 'https://tse2.mm.bing.net/th?id=OIP.nw7zC5s6Vc8cEAWGLYBX-gHaFv&pid=Api&P=0&h=180', xmlId: "coup-d-etat", className:'bijoux', title: "Un coup d'etat" },
    { src: 'https://tse4.mm.bing.net/th?id=OIP.tNEBQlE-37Ss4zJ2wwGivAHaHa&pid=Api&P=0&h=180', xmlId: "l-enfant", className:'bijoux', title: "L'enfant" },
    { src: 'https://tse4.mm.bing.net/th?id=OIP.uE_U5iEmjltNrkHc85u-tgHaKe&pid=Api&P=0&h=180', xmlId: "conte-de-noel", className:'bijoux', title: 'Conte de Noel' },
    { src: 'https://tse1.mm.bing.net/th?id=OIP.uFSlYyB7TRlLAEFIpr5_UwHaIP&pid=Api&P=0&h=180', xmlId: "reine-hortense", className:'bijoux', title: 'La Reine Hortense' },
    { src: 'https://tse2.mm.bing.net/th?id=OIP.K66ExGCP31eHF6fLttISDwHaFj&pid=Api&P=0&h=180', xmlId: "le-perdon", className:'bijoux', title: 'Le pardon' },
    { src: 'https://tse2.mm.bing.net/th?id=OIP.t2edsMn7aFTIVav8TsZWBwHaEK&pid=Api&P=0&h=180', xmlId: "legende-mont-st-michel", className:'bijoux', title: 'La Legende du Mont Saint-Michel' },
    { src: 'https://tse3.explicit.bing.net/th?id=OIP.6MNYlEeLqrv60hn445EPOQHaKy&pid=Api&P=0&h=180', xmlId: "une-veuve", className:'bijoux', title: 'Une veuve' },
    { src: 'https://tse3.mm.bing.net/th?id=OIP.gX8fs1mLVA0BMnkQpCBm-QHaIr&pid=Api&P=0&h=180', xmlId: "mlle-coccote", className:'bijoux', title: 'Mademoiselle Cocotte' },
    { src: ' https://tse2.mm.bing.net/th?id=OIP.D9VmXZhVZ-gJ4DH6TWcPKwHaEK&pid=Api&P=0&h=180', xmlId: "apparition", className:'bijoux', title:'Apparition'}
  ];

  const [currentXmlId, setCurrentXmlId] = useState(null);
  const [currentTextUrl, setCurrentTextUrl] = useState(null);

  const handleImageClick = (xmlId) => {
    setCurrentXmlId(xmlId);

    // Determine the corresponding texturl based on the selected xmlId
    const repo = 'https://raw.githubusercontent.com/AlessandraTrenchi/Clair-de-lune/main/src/text/';
    const texturl = repo + xmlId + '.xml';

    setCurrentTextUrl(texturl);
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
          <div className='main-content'>
            {/* Render the XML content for the selected image */}
            {currentXmlId && <XmlComponent texturl={currentTextUrl} />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Clair;