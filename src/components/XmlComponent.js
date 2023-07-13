import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import CETEIcean from 'CETEIcean';
import Footer from './Footer';
import '../index.css';

const XmlComponent = ({ xmlText }) => {
  const xmlContainerRef = useRef(null);

  useEffect(() => {
    const ceteicean = new CETEIcean({
      ignoreFragmentId: true,
    });

    ceteicean.getHTML5(xmlText, (data) => {
      // Clear previous XML content
      xmlContainerRef.current.innerHTML = '';
      // Append new XML content
      xmlContainerRef.current.appendChild(data);
    });
  }, [xmlText]);

  return (
    <div className="xml-component">
      <div id="TEI" ref={xmlContainerRef} />
      <Footer />
    </div>
  );
};

XmlComponent.propTypes = {
  xmlText: PropTypes.string.isRequired,
};

export default XmlComponent;
