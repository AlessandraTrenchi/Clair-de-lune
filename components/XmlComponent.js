import React, { useEffect, useState } from 'react';
import { CETEI } from 'ceteicean';

const XmlComponent = () => {
  const [xmlString, setXmlString] = useState('');

  useEffect(() => {
    const generateXml = async () => {
      const ceteicean = new CETEI();
      ceteicean.create('1.0'); // Creates a new XML document with version 1.0
      ceteicean.open('root'); // Opens a new element with the tag name 'root'
      ceteicean.open('element'); // Opens a new element with the tag name 'element'
      ceteicean.text('Contenuto del tuo element'); // Adds text content to the current element
      ceteicean.close(); // Closes the current element
      ceteicean.close(); // Closes the 'root' element
      const generatedXmlString = await ceteicean.saveXML(); // Returns the XML representation as a string
      setXmlString(generatedXmlString);
    };

    generateXml();
  }, []);

  return (
    <div>
      <pre>{xmlString}</pre>
    </div>
  );
};

export default XmlComponent;
