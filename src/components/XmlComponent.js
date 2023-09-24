import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const XmlComponent = ({ texturl, xslturl }) => {
  const xmlContainerRef = useRef(null);

  useEffect(() => {
    const loadXmlContent = async () => {
      try {
        const response = await fetch(texturl);
        if (response.ok) {
          const xmlData = await response.text();

          // Create a new DOMParser instance
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(xmlData, 'text/xml');

          // Check if an XSLT file is provided
          if (xslturl) {
            const xsltResponse = await fetch(xslturl);
            if (xsltResponse.ok) {
              const xsltData = await xsltResponse.text();
              const xsltProcessor = new XSLTProcessor();
              const xsltDoc = parser.parseFromString(xsltData, 'text/xml');
              xsltProcessor.importStylesheet(xsltDoc);

              // Apply the XSLT transformation
              const result = xsltProcessor.transformToDocument(xmlDoc);

              xmlContainerRef.current.innerHTML = '';
              xmlContainerRef.current.appendChild(result.documentElement);
            } else {
              console.error('XSLT file not found');
            }
          } else {
            // If no XSLT is provided, simply display the XML
            xmlContainerRef.current.textContent = xmlData;
          }
        } else {
          throw new Error('XML fragment not found');
        }
      } catch (error) {
        console.error('Error loading XML content:', error);
      }
    };

    loadXmlContent();
  }, [texturl, xslturl]);

  return (
    <div className="xml-component">
      <div id="TEI" ref={xmlContainerRef} />
    </div>
  );
};

XmlComponent.propTypes = {
  texturl: PropTypes.string.isRequired, // Accepts the URL of the XML file
  xslturl: PropTypes.string, // Optional XSLT URL
};

export default XmlComponent;
