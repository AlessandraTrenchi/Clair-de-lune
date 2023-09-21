import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import CETEIcean from 'CETEIcean';

const XmlComponent = ({ xmlId }) => {
  const xmlContainerRef = useRef(null);

  useEffect(() => {
    const loadXmlContent = async () => {
      try {
        const response = await fetch('bijoux.xml');
        const xmlText = await response.text();
        
        const ceteicean = new CETEIcean({
          ignoreFragmentId: true,
        });

        // Parse the XML text
        const xmlDoc = new DOMParser().parseFromString(xmlText, 'application/xml');

        // Find the div element with the specified xml:id
        const divElements = xmlDoc.querySelectorAll(`div[xml\\:id="${xmlId}"]`);
        if (divElements.length > 0) {
          // Create a new XML document and add the selected div element to it
          const newDoc = document.implementation.createDocument(null, null, null);
          const clonedElement = divElements[0].cloneNode(true);
          newDoc.appendChild(newDoc.importNode(clonedElement, true));

          ceteicean.getHTML5(newDoc.documentElement.outerHTML, (data) => {
            // Clear previous XML content
            xmlContainerRef.current.innerHTML = '';
            // Append new XML content
            xmlContainerRef.current.appendChild(data);
          });
        } else {
          throw new Error(`XML fragment with xml:id "${xmlId}" not found`);
        }
      } catch (error) {
        console.error('Error loading XML content:', error);
      }
    };

    loadXmlContent();
  }, [xmlId]);

  return (
    <div className="xml-component">
      <div id="TEI" ref={xmlContainerRef} />
    </div>
  );
};

XmlComponent.propTypes = {
  xmlId: PropTypes.string.isRequired,
};

export default XmlComponent;
