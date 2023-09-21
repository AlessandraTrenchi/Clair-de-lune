import React, { useState } from 'react';
import XmlComponent from './XmlComponent';

const titlesWithIds = [
  { title: 'Les Bijoux', xmlId: 'les-bijoux' },
  { title: 'Clair de Lune', xmlId: 'clair-de-lune' },
  { title: 'Le Loup', xmlId: 'le-loup' },
  { title: "Un Coup d'Etat", xmlId: 'un-coup-d-etat' }, // Corrected xmlId
  { title: "L'enfant", xmlId: "l'enfant" }, 
  { title: "Conte de Noël", xmlId: "conte-de-noel" }, 
  { title: "La Reine Hortense", xmlId: "reine-hortense" }, 
  { title: "Le Pardon", xmlId: "le-pardon" }, 
  { title: "La Légende du Mont Saint Michel", xmlId: "legende-mont-saint-michel" }, 
  { title: "Une veuve", xmlId: "une-veuve" }, 
  { title: "Mademoiselle Cocotte", xmlId: "mlle-cocotte" }, 
  { title: "Apparition", xmlId: "apparition" }, 



];

const Clair = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentXmlContent, setCurrentXmlContent] = useState('');

  const handleNext = () => {
    setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titlesWithIds.length);
  };

  const handlePrev = () => {
    setCurrentTitleIndex((prevIndex) => (prevIndex - 1 + titlesWithIds.length) % titlesWithIds.length);
  };

  const currentTitleWithId = titlesWithIds[currentTitleIndex];

  const handleXmlContentChange = (xmlContent) => {
    setCurrentXmlContent(xmlContent);
  };

  return (
    <div className='nett'>
      <div className='carr'>
        <div className='clair-container'>
          <h1>Clair de Lune Digital Edition</h1>
        </div>
        <div className='main-content'>
          <div className="carousel">
            <h2>{currentTitleWithId.title}</h2>
            <p>xml:id: {currentTitleWithId.xmlId}</p>
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
          <XmlComponent xmlId={currentTitleWithId.xmlId} onXmlContentChange={handleXmlContentChange} />
          <div className="xml-content">
            <p>{currentXmlContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clair;
