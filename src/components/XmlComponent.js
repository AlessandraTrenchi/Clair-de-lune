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
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

        const fragment = xmlDoc.querySelector(`[xml\\:id="${xmlId}"]`);
        if (fragment) {
          const ceteicean = new CETEIcean({
            ignoreFragmentId: true,
          });
          ceteicean.getHTML5(fragment.outerHTML, (data) => {
            // Clear previous XML content
            xmlContainerRef.current.innerHTML = '';
            // Append new XML content
            xmlContainerRef.current.appendChild(data);
          });
        } else {
          throw new Error('XML fragment not found');
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
