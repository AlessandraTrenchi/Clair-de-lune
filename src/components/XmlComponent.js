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

        const fragment = ceteicean.getHTML5Fragment(xmlText, xmlId);
        if (fragment) {
          // Clear previous XML content
          xmlContainerRef.current.innerHTML = '';
          // Append new XML fragment
          xmlContainerRef.current.appendChild(fragment);
        } else {
          throw new Error(`XML fragment with id "${xmlId}" not found`);
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
