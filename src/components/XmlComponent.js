import React, { useEffect, useRef } from 'react';
import CETEIcean from 'CETEIcean'
import bijouxXML from '../text/bijoux.xml';
import Footer from './Footer';
import '../index.css';
const XmlComponent = () => {
  const xmlContainerRef = useRef(null);

  useEffect(() => {
    const ceteicean = new CETEIcean({
      ignoreFragmentId: true
    });

    ceteicean.getHTML5(bijouxXML, (data) => {
      xmlContainerRef.current.appendChild(data);
    });
  }, []);

  return (
    <div>
      <div id="TEI" ref={xmlContainerRef} />
      <Footer />
    </div>
  );
};

export default XmlComponent;
