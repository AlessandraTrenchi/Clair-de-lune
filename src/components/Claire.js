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
  const [xmlContent, setXmlContent] = useState('');
  const [imageName, setImageName] = useState(images[0].name);
  const [isEditable, setIsEditable] = useState(false);

  const handleImageChange = (name) => {
    setImageName(name);
  };

  const handleToggleEdit = () => {
    setIsEditable(!isEditable);
  };

  useEffect(() => {
    // Update XML content based on the selected image
    // Replace this with your own logic to fetch XML content
    const fetchXmlContent = async () => {
      // Simulating an asynchronous API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setXmlContent(`XML content for ${imageName}`);
    };

    fetchXmlContent();
  }, [imageName]);

  return (
    <>
      <div className='nett'>
        <div className='carr'>
          <h1>Clair de Lune Digital Edition</h1>
          <h2>Select the text</h2>
          <div className='centered-carousel'>
            <Carousel images={images} onImageChange={handleImageChange} />
          </div>
          <div className="carousel-text">
            <h3
              contentEditable={isEditable}
              onDoubleClick={handleToggleEdit}
              onBlur={handleToggleEdit}
            >
              {imageName}
            </h3>
          </div>
        </div>
        <div className='sidebar-top'>
          <Sidebar sections={[]} />
          <div className="main-content">
            {/* Render the XML content for the selected image */}
            {xmlContent && <XmlComponent xmlText={xmlContent} />}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Claire;