import React, { useEffect } from 'react';
import { CETEI } from 'ceteicean';

const XmlComponent = () => {
  useEffect(() => {
    const generateXml = async () => {
        const ceteicean = new CETEI();
        ceteicean.create('1.0'); // Creates a new XML document with version 1.0
        ceteicean.open('root'); // Opens a new element with the tag name 'root'
        ceteicean.open('element'); // Opens a new element with the tag name 'element'
        ceteicean.text('Contenuto del tuo element'); // Adds text content to the current element
        ceteicean.close(); // Closes the current element
        ceteicean.close(); // Closes the 'root' element
        const xmlString = await ceteicean.saveXML(); // Returns the XML representation as a string
        console.log(xmlString);
      };
  

      generateXml(); //will generate a xml document
    }, []);

  return (
    <div>
      {/* Your JSX code for the component */}
    </div>
  );
}; 

export default XmlComponent;

