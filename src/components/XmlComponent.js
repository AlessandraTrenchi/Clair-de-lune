import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import CETEIcean from 'CETEIcean';

const XmlComponent = ({ xmlId }) => {
  const xmlContainerRef = useRef(null);
  const [xmlContent, setXmlContent] = useState('');

  useEffect(() => {
    const loadXmlContent = async () => {
      try {
        const response = await fetch('src/text/bijoux.xml');
        const xmlText = await response.text();

        // Create a DOMParser
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

        // Find the element with the specified xml:id
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
