import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const XmlComponent = ({ xmlId }) => {
  const xmlContainerRef = useRef(null);
  const [xmlContent, setXmlContent] = useState(''); // Declare xmlContent here

  // Define a function to load XML content
  const loadXmlContent = async (xmlId) => {
    try {
      const response = await fetch('/api/extract-xml-fragment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ xmlId, element_type: 'story' }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch XML fragment: ${response.statusText}`);
      }

      const xmlText = await response.text();

      // Create a DOMParser
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'application/xml');

      // Find all <div> elements with an `xml:id` attribute
      const divsWithId = xmlDoc.querySelectorAll('div[xml\\:id]');

      // Initialize an empty string to store the text fragment
      let textFragment = '';

      // Loop through each <div> element
      for (const div of divsWithId) {
        // Check if the <div> has an `xml:id` attribute
        const divXmlId = div.getAttribute('xml:id');

        if (divXmlId === xmlId) {
          // Find the <head> element within the <div>
          const headElement = div.querySelector('head');

          // Iterate through the sibling elements of <head> and concatenate their text content
          for (const sibling of headElement.nextElementSibling.children) {
            // Check if the sibling is a paragraph element
            if (sibling.tagName === 'p') {
              // Concatenate the text content of the paragraph
              textFragment += sibling.textContent + ' ';
            }
          }

          // Break the loop if the text fragment has been found
          break;
        }
      }

      // Update the state with the XML content
      setXmlContent(textFragment);
    } catch (error) {
      console.error('Error loading XML content:', error);

      // Handle the error here, e.g., display an error message to the user
      setXmlContent(`Error loading XML content: ${error.message}`);
    }
  };

  useEffect(() => {
    // Load the initial XML content when the component mounts
    loadXmlContent(xmlId);
  }, [xmlId]);

  return (
    <div className="xml-component">
      {/* Display the extracted text content */}
      <div dangerouslySetInnerHTML={{ __html: xmlContent }} />
    </div>
  );
};

XmlComponent.propTypes = {
  xmlId: PropTypes.string.isRequired,
};

export default XmlComponent;
