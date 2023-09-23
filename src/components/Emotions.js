import React from 'react';
import PropTypes from 'prop-types';

const Emotions = ({ emotionData }) => {
  // Mappatura tra rdf:about e ana per le emozioni
  const emotionColorMapping = {
    'http://130.192.212.225/fuseki/ArsEmotica-core#Joy': 'yellow',
    'http://130.192.212.225/fuseki/ArsEmotica-core#Trust': 'green',
    'http://130.192.212.225/fuseki/ArsEmotica-core#Anger': 'red',
    'http://130.192.212.225/fuseki/ArsEmotica-core#Sadness': 'blue',
    'http://130.192.212.225/fuseki/ArsEmotica-core#Fear': 'purple',
    'http://130.192.212.225/fuseki/ArsEmotica-core#Disgust': 'brown',
    'http://130.192.212.225/fuseki/ArsEmotica-core#Surprise': 'orange',
    'http://130.192.212.225/fuseki/ArsEmotica-core#Anticipation': 'pink',
    // Aggiungi altre emozioni e i relativi colori qui
  };

  const renderEmotions = () => {
    return emotionData.map((emotion) => {
      const emotionColor = emotionColorMapping[emotion.rdfAbout];
      const emotionStyle = {
        backgroundColor: emotionColor || 'white',
      };

      return (
        <div key={emotion.rdfAbout} className="emotions" style={emotionStyle}>
          {emotion.label}
        </div>
      );
    });
  };

  return (
    <div className="emotions-container">
      {renderEmotions()}
    </div>
  );
};

Emotions.propTypes = {
  emotionData: PropTypes.arrayOf(
    PropTypes.shape({
      rdfAbout: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Emotions;
