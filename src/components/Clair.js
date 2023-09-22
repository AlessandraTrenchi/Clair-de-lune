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

    // Get the xmlId of the next title
    const nextXmlId = titlesWithIds[(currentTitleIndex + 1) % titlesWithIds.length].xmlId;
    
    // Load the XML content for the next title
    handleXmlContentChange(nextXmlId);
  };

  const handlePrev = () => {
    setCurrentTitleIndex((prevIndex) => (prevIndex - 1 + titlesWithIds.length) % titlesWithIds.length);

    // Get the xmlId of the previous title
    const prevXmlId = titlesWithIds[(currentTitleIndex - 1 + titlesWithIds.length) % titlesWithIds.length].xmlId;
    
    // Load the XML content for the previous title
    handleXmlContentChange(prevXmlId);
  };

  const currentTitleWithId = titlesWithIds[currentTitleIndex];

  const handleXmlContentChange = async (xmlId) => {
    try { //client side code: where i make the fetch request
      const response = await fetch('http://localhost:3000/api/extract-xml-fragment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ xmlId, element_type: 'story' }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch XML fragment: ${response.statusText}`);
      }

      const xmlContent = await response.text();

      // Set the XML content in your component state
      setCurrentXmlContent(xmlContent);
    } catch (error) {
      console.error('Error loading XML content:', error);

      // Handle the error here, e.g., display an error message to the user
      setCurrentXmlContent(`<p>Error loading XML content: ${error.message}</p>`);
    }
    console.log('Fetching from URL:', 'http://localhost:3000/api/extract-xml-fragment');
const response = await fetch('http://localhost:3000/api/extract-xml-fragment', {
  // Rest of the fetch request configuration
});

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
            <button onClick={handlePrev} className='pp'>Previous</button>
            <button onClick={handleNext} className='pp'>Next</button>
          </div>
          <XmlComponent xmlId={currentTitleWithId.xmlId} />
          <div className="xml-content">
            <p dangerouslySetInnerHTML={{ __html: currentXmlContent }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clair;