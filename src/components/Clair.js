import React, { useState } from 'react';
import XmlComponent from './XmlComponent';

const titlesWithIds = [
  { title: 'Les Bijoux', xmlId: 'les-bijoux' },
  { title: 'Clair de Lune', xmlId: 'clair-de-lune' },
  { title: 'Le Loup', xmlId: 'le-loup' },
  // Add more titles with their corresponding xml:id values
];

const Clair = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const handleNext = () => {
    setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titlesWithIds.length);
  };

  const handlePrev = () => {
    setCurrentTitleIndex((prevIndex) => (prevIndex - 1 + titlesWithIds.length) % titlesWithIds.length);
  };

  const currentTitleWithId = titlesWithIds[currentTitleIndex];

  return (
    <div className='nett'>
      <div className='carr'>
        <div className='clair-container'>
          <h1>Clair de Lune Digital Edition</h1>
        </div>
        <div className='main-content'>
          <div className="carousel">
            <h2>{currentTitleWithId.title}</h2>
            <p>xml:id: {currentTitleWithId.xmlId}</p> {/* Display xml:id here */}
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
          <XmlComponent xmlId={currentTitleWithId.xmlId} />
        </div>
      </div>
    </div>
  );
};

export default Clair;
