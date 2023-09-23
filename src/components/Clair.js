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

  useEffect(() => {
    const currentTitle = textTitles[currentTitleIndex];

    // Utilizza CETEIcean per renderizzare il tuo XML
    const cetiOceanInstance = new CETEI();
    cetiOceanInstance.getHTML5(`/text/${currentTitle}.xml`, function(data) {
      setCurrentXml(data);
    });
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
  <div className="pagination">
    <button className="pp" onClick={handlePrev} disabled={currentTitleIndex === 0}>
      Precedente
    </button>
    <button className='pp'
      onClick={handleNext}
      disabled={currentTitleIndex === textTitles.length - 1}
    >
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
