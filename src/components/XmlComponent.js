import React, { useEffect, useState } from 'react';
import { CETEI } from 'ceteicean';
import { CeteiCean } from 'cetei-cean';
import 'cetei-cean/dist/ceteicean.css';
import bijouxXML from '../text/bijoux.xml';

const XmlComponent = () => {
  const [xmlString, setXmlString] = useState('');

  useEffect(() => {
    const generateXml = async () => {
      const ceteicean = new CETEI();
      ceteicean.load(bijouxXML); // Load the XML file
      const generatedXmlString = await ceteicean.saveXML();
      setXmlString(generatedXmlString);
    };

    generateXml();
  }, []);

  useEffect(() => {
    const renderAnnotatedText = () => {
      const ceteiCean = new CeteiCean();
      const container = document.getElementById('annotated-text-container');
      ceteiCean.loadFromString(xmlString, container);
    };

    if (xmlString) {
      renderAnnotatedText();
    }
  }, [xmlString]);

  return (
    <div>
      <div id="annotated-text-container" />
    </div>
  );
};

export default XmlComponent;
