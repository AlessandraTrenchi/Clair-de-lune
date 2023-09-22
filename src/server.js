const express = require('express');
const bodyParser = require('body-parser');
const xml2js = require('xml2js');
const path = require('path'); // Import the 'path' module

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Define your API endpoint
app.post('/api/extract-xml-fragment', (req, res) => {
    console.log('Received request at /api/extract-xml-fragment');
  try {
    const { xmlId, element_type } = req.body;

    // Construct the correct file path to 'bijoux.xml'
    const xmlFilePath = path.join(__dirname, 'src', 'text', 'bijoux.xml');

    // Load and parse the XML document
    const fs = require('fs');
    const xmlData = fs.readFileSync(xmlFilePath, 'utf8');
    const parser = new xml2js.Parser();

    parser.parseString(xmlData, (err, result) => {
      if (err) {
        throw new Error('Failed to parse XML document');
      }

      // Assuming your XML structure is hierarchical and has a root element 'root':
      const root = result.root; // Replace 'root' with the actual root element in your XML

      // Find the element with the specified xml:id and element_type
      // You may need to adapt this logic based on your XML structure
      const matchingElement = findMatchingElement(root, xmlId, element_type);

      if (matchingElement) {
        // Convert the matching element back to XML format
        const builder = new xml2js.Builder();
        const xmlFragmentString = builder.buildObject(matchingElement);

        // Send the XML fragment as the HTTP response
        res.send(xmlFragmentString);
      } else {
        throw new Error(`XML fragment with xml:id "${xmlId}" and element_type "${element_type}" not found`);
      }
    });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

function findMatchingElement(root, xmlId, element_type) {
    try {
      // Traverse the XML structure to find the desired element
      const divs = root.teiHeader[0].profileDesc[0].abstract[0].div; // Assuming 'div' contains your story elements
  
      for (const div of divs) {
        const elementId = div.$.xmlid; // Access the 'xml:id' attribute
        const elementType = div.$.type; // Access the 'type' attribute
  
        if (elementId === xmlId && elementType === element_type) {
          return div; // Found a matching element
        }
      }
  
      return null; // Element not found
    } catch (error) {
      console.error('Error finding matching element:', error);
      return null;
    }
  }
  
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
