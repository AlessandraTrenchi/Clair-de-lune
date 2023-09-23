// XmlComponent.js
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import CETEI from 'CETEIcean';

const XmlComponent = ({ texturl }) => {
  const xmlContainerRef = useRef(null);

  useEffect(() => {
    const loadXmlContent = async () => {
      try {
        const response = await fetch(texturl);
        console.log('Fetching XML data from:', texturl);

        if (response.ok) {
          const CETEIceanInstance = new CETEI();
          CETEIceanInstance.getHTML5(texturl, (data) => {
            xmlContainerRef.current.innerHTML = '';
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
  }, [texturl]);

  return (
    <div className="xml-component">
      <div id="TEI" ref={xmlContainerRef} />
    </div>
  );
};

XmlComponent.propTypes = {
  texturl: PropTypes.string.isRequired, // Accepts the URL of the XML file
};

export default XmlComponent;
