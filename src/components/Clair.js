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
  const [emozioni, setEmozioni] = useState([]);

  useEffect(() => {
    const currentTitle = textTitles[currentTitleIndex];
    const currentXmlFile = textXmlFiles[currentTitleIndex];

    // Utilizza CETEIcean per renderizzare il tuo XML
    const cetiOceanInstance = new CETEI();
    cetiOceanInstance.getHTML5(`src/text/${currentXmlFile}`, function(data) {
      setCurrentXml(data);

      // Estrai emozioni dal file XML e aggiungile a uno stato
      const emozioniXML = extractEmozioniFromXML(data);
      setEmozioni(emozioniXML);

      // Evidenzia le emozioni nell'XML
      highlightEmotionsInXML(emozioniXML);
    });
  }, [currentTitleIndex]);

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
  

  const highlightEmotionsInXML = (emozioniXML) => {
    // Ottieni il contenuto HTML dell'XML corrente
    const xmlContainer = document.querySelector('.xml-content');
    const xmlContent = xmlContainer.querySelector('div');
  
    // Cicla attraverso gli elementi 'interp' e applica lo stile di evidenziazione alle emozioni
    emozioniXML.forEach((emozione) => {
      // Puoi definire uno stile CSS o un attributo per evidenziare le emozioni
      // Ad esempio, aggiungi una classe CSS chiamata 'highlighted' o un attributo 'data-emotion'
      const elementsToHighlight = xmlContent.querySelectorAll(`interp[ana="#${emozione}"]`);
      
      elementsToHighlight.forEach((element) => {
        // Evidenzia l'elemento (ad esempio, applica una classe CSS o aggiungi un attributo)
        element.classList.add('highlighted');
        // Oppure, se preferisci aggiungere un attributo:
        // element.setAttribute('data-emotion', emozione);
      });
    });
  };
  
  const getCurrentEmotionIndex = (currentEmotion) => {
    // Verifica se l'array delle emozioni è definito e non vuoto
    if (emozioni && emozioni.length > 0) {
      return emozioni.map((emozione, index) => (
        <button
          key={index}
          className={index === getCurrentEmotionIndex(emozione) ? 'selected' : ''}
        >
          {emozione}
        </button>
      ));
    }
    
    return null; // Restituisci null se l'array delle emozioni è vuoto o non definito
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
                {getCurrentEmotionIndex()}
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
