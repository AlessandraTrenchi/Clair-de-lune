import React, { useState, useEffect } from 'react';
import CETEI from 'CETEIcean';
import '../index.css';

const Clair = () => {
  const textTitles = [
    'Les Bijoux',
    'Clair de Lune',
    // Aggiungi gli altri titoli qui
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentXml, setCurrentXml] = useState('');
  const [emozioni, setEmozioni] = useState([]);

  useEffect(() => {
    const currentTitle = textTitles[currentTitleIndex];

    // Utilizza CETEIcean per renderizzare il tuo XML
    const cetiOceanInstance = new CETEI();
    cetiOceanInstance.getHTML5(`/text/${currentTitle}.xml`, function(data) {
      setCurrentXml(data);

      // Estrai emozioni dal file XML e aggiungile a uno stato
      const emozioniXML = extractEmozioniFromXML(data);
      setEmozioni(emozioniXML);

      // Evidenzia le emozioni nell'XML
      highlightEmotionsInXML(emozioniXML);
    });
  }, [currentTitleIndex]);

  // Funzione per estrarre emozioni da un file XML
  const extractEmozioniFromXML = (xmlString) => {
    // Crea un oggetto parser XML
    const parser = new DOMParser();
    
    // Analizza il testo XML in un documento XML
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    
    // Trova tutti gli elementi 'interp' con attributo 'ana' (analogia)
    const interpElements = xmlDoc.querySelectorAll('interp[ana]');
    
    // Estrai le emozioni dall'attributo 'ana' degli elementi 'interp'
    const emozioni = Array.from(interpElements).map((element) => {
      // Estrai il valore dell'attributo 'ana' (es. '#anger')
      const anaValue = element.getAttribute('ana');
      
      // Rimuovi il carattere '#' se presente
      return anaValue.replace('#', '');
    });
    
    return emozioni;
  };
  
  // Funzione per evidenziare le emozioni nell'XML
  const highlightEmotionsInXML = (emozioniXML) => {
    // ... Implementa la logica per evidenziare le emozioni nell'XML ...
  };

  const getCurrentEmotionIndex = () => {
    // Implementa la logica per ottenere l'indice dell'emozione corrente
  };

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
                {emozioni.map((emozione, index) => (
                  <button
                    key={index}
                    className={index === getCurrentEmotionIndex() ? 'selected' : ''}
                  >
                    {emozione}
                  </button>
                ))}
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
