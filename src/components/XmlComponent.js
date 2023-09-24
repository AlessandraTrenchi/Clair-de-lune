import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
<<<<<<< Updated upstream

const XmlComponent = ({ texturl, xslturl }) => {
=======
import CETEI from 'CETEIcean';

const XmlComponent = ({ texturl, applyHighlighting }) => {
>>>>>>> Stashed changes
  const xmlContainerRef = useRef(null);

  useEffect(() => {
    const loadXmlContent = async () => {
      try {
        const response = await fetch(texturl);
        if (response.ok) {
<<<<<<< Updated upstream
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
=======
          const CETEIceanInstance = new CETEI();
          CETEIceanInstance.getHTML5(texturl, (data) => {
            xmlContainerRef.current.innerHTML = '';
            xmlContainerRef.current.appendChild(data);
            console.log('text',data);

            // After loading the XML content, call the applyHighlighting callback
            applyHighlighting();
          });
>>>>>>> Stashed changes
        } else {
          throw new Error('XML fragment not found');
        }
      } catch (error) {
        console.error('Error loading XML content:', error);
      }
    };

    loadXmlContent();
<<<<<<< Updated upstream
  }, [texturl, xslturl]);
=======
  }, [texturl, applyHighlighting]);
>>>>>>> Stashed changes

  return (
    <div className="xml-component">
      <div id="TEI" ref={xmlContainerRef} />
    </div>
  );
};

XmlComponent.propTypes = {
<<<<<<< Updated upstream
  texturl: PropTypes.string.isRequired, // Accepts the URL of the XML file
  xslturl: PropTypes.string, // Optional XSLT URL
=======
  texturl: PropTypes.string.isRequired,
  applyHighlighting: PropTypes.func.isRequired, // Pass the applyHighlighting callback
>>>>>>> Stashed changes
};

export default XmlComponent;
