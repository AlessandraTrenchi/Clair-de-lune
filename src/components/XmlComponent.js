import React, { useEffect, useState } from 'react';
import { CETEI } from 'ceteicean';
import bijouxXML from '../text/bijoux.xml';

const XmlComponent = () => {
  const [xmlString, setXmlString] = useState('');

  useEffect(() => {
    const generateXml = async () => {
      const ceteicean = new CETEI();
      await ceteicean.getHTML5(bijouxXML);
      const generatedXmlString = ceteicean.exportHTML5();
      setXmlString(generatedXmlString);
    };

    generateXml();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: xmlString }} />
  );
};

export default XmlComponent;
