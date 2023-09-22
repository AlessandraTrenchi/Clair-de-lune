import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const XmlComponent = ({ xmlId }) => {
  const xmlContainerRef = useRef(null);
  const [xmlContent, setXmlContent] = useState(''); // Declare xmlContent here

  useEffect(() => {
    const loadXmlContent = async () => {
      try {
        const response = await fetch('src/text/bijoux.xml');

        if (!response.ok) {
          throw new Error(`Failed to fetch XML: ${response.statusText}`);
        }

        const xmlText = await response.text();

        // Log the XML content for debugging
        console.log('XML Content:', xmlText);

        // Create a DOMParser
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'application/xml');

        // Define the namespaces
        const namespaces = {
          tei: 'http://www.tei-c.org/ns/1.0',
          rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
          rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
          ArsEmotica: 'http://130.192.212.225/fuseki/ArsEmotica-core#',
        };

        // Find the element with the specified xml:id in the correct namespace
        const element = xmlDoc.querySelector(`[xml\\:id="${xmlId}"][type="story"]`);

        if (element) {
          // Get the outerHTML of the found element
          const fragmentHtml = element.outerHTML;

          // Update the state with the XML content
          setXmlContent(fragmentHtml);
        } else {
          throw new Error(`XML fragment with xml:id "${xmlId}" and type="story" not found`);
        }
      } catch (error) {
        console.error('Error loading XML content:', error);

        // Handle the error here, e.g., display an error message to the user
        setXmlContent(`<p>Error loading XML content: ${error.message}</p>`);
      }
    };

    loadXmlContent();
  }, [xmlId]);

  return (
    <div className="xml-component">
      <div id="TEI" ref={xmlContainerRef} dangerouslySetInnerHTML={{ __html: xmlContent }} />
    </div>
  );
};

XmlComponent.propTypes = {
  xmlId: PropTypes.string.isRequired,
};

export default XmlComponent;
