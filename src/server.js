const express = require('express');
const bodyParser = require('body-parser');
const xml2js = require('xml2js');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Define your API endpoint
app.post('/api/extract-xml-fragment', (req, res) => {
  try {
    const { xmlId, element_type } = req.body;

    // Load and parse the XML document (assuming 'bijoux.xml' is in the same directory)
    const fs = require('fs');
    const xmlData = fs.readFileSync('bijoux.xml', 'utf8');
    const parser = new xml2js.Parser();
    
    parser.parseString(xmlData, (err, result) => {
      if (err) {
        throw new Error('Failed to parse XML document');
      }

      // Search for the XML fragment based on xmlId and element_type
      // Extract the fragment as a string

      // Send the XML fragment as the HTTP response
      res.send(xmlFragmentString);
    });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
