import React, { useState, useEffect } from 'react';
import CETEI from 'CETEIcean';
import '../index.css';

const Clair = () => {
  const textTitles = [
    'Clair de Lune',
    "Un coup d’État",
    "Le loup",
    "L’enfant",
    "Conte de Noël",
    "Le pardon",
    "La légende du Mont-Saint-Michel",
    "Une veuve",
    "Mademoiselle Cocotte",
    "Les bijoux",
    "Apparition"
  ];

  const textXmlFiles = [
    'clair-de-lune.xml',
    'coup-d-etat.xml',
    'le-loup.xml',
    'l-enfant.xml',
    'conte-de-noel.xml',
    'le-perdon.xml',
    'legende-mont-st-michel.xml',
    'une-veuve.xml',
    'mlle-coccote.xml',
    'bijoux.xml',
    'apparition.xml'
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentXml, setCurrentXml] = useState('');

  // Funzione per caricare l'XML in base all'indice del titolo
  const loadXmlForCurrentTitle = () => {
    const currentXmlFile = textXmlFiles[currentTitleIndex];
    const xmlFilePath = `src/text/${currentXmlFile}`;
  
    // Utilizza CETEIcean per renderizzare il tuo XML
    const cetiOceanInstance = new CETEI();
  
    cetiOceanInstance.getHTML5(xmlFilePath, function(data) {
      // Verifica se ci sono errori o avvisi
      if (cetiOceanInstance.error) {
        console.error('Errore durante il caricamento del documento XML:', cetiOceanInstance.error);
      } else if (cetiOceanInstance.warning) {
        console.warn('Avviso durante il caricamento del documento XML:', cetiOceanInstance.warning);
      }
  
      // Imposta il documento XML corrente
      setCurrentXml(data);
    });
  };

  // Carica l'XML quando currentTitleIndex cambia
  useEffect(() => {
    loadXmlForCurrentTitle();
  }, [currentTitleIndex]);

  const handleTitleChange = (titleIndex) => {
    setCurrentTitleIndex(titleIndex);
  };

  const handlePrev = () => {
    if (currentTitleIndex > 0) {
      setCurrentTitleIndex(currentTitleIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentTitleIndex < textTitles.length - 1) {
      setCurrentTitleIndex(currentTitleIndex + 1);
    }
  };

  return (
    <>
      <div className='nett'>
        <div className='carr'>
          <div className='clair-container'>
            <h1>Clair de Lune Digital Edition</h1>
          </div>
          <div className='main-content'>
            <div className="xml-content">
              <h2>{textTitles[currentTitleIndex]}</h2>
              <div dangerouslySetInnerHTML={{ __html: currentXml }} />
              <div className="menu-emozioni">
                {/* Qui puoi mostrare le emozioni se lo desideri */}
              </div>
              <div className="pagination">
                <button className="pp" onClick={handlePrev} disabled={currentTitleIndex === 0}>
                  Precedente
                </button>
                <button className='pp' onClick={handleNext} disabled={currentTitleIndex === textTitles.length - 1}>
                  Successivo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clair;
