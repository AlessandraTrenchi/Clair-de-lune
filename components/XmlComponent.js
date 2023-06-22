import React, { useEffect } from 'react';
import { create } from 'xmlbuilder2';

const XmlComponent = () => {
  useEffect(() => {
    const generateXml = () => {
       const writer = new XmlWriter();
       writer.startDocument(); //cetei methods: starts a new xml doc
       writer.startElement('root'); //starts a new element with the tagName root
       writer.writeElement('element', 'Contenuto del tuo element'); //builds an element with the specified tagname, and textContent
       writer.endElement(); //closes the current element
       writer.endDocument(); //returns the xml representation as a string

       const xmlString = writer.toString();
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


