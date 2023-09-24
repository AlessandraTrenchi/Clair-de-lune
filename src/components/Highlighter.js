import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Highlighter = ({ textContainerRef, selectedAnaValues }) => {
  // Function to apply highlighting based on selectedAnaValues
  const applyHighlighting = () => {
    if (!textContainerRef.current) {
      return; // Exit early if the container isn't available yet
    }

    const elementsToHighlight = textContainerRef.current.querySelectorAll('.tei-interp');

    elementsToHighlight.forEach((element) => {
      const anaValue = element.id.replace('tei-interp#', ''); // Extract the anaValue
      if (selectedAnaValues.includes(anaValue)) {
        // Apply your highlighting style here, for example:
        element.style.backgroundColor = 'yellow';
      } else {
        // Remove highlighting if not selected
        element.style.backgroundColor = 'transparent';
      }
    });
  };

  // Apply highlighting whenever selectedAnaValues change
  useEffect(() => {
    applyHighlighting();
  }, [selectedAnaValues]);

  return null; // The component doesn't render anything in the DOM
};

Highlighter.propTypes = {
  textContainerRef: PropTypes.object.isRequired, // Reference to the XML content container
  selectedAnaValues: PropTypes.arrayOf(PropTypes.string).isRequired, // Selected checkbox values
};

export default Highlighter;
