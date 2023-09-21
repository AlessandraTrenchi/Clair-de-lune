const { parse } = require('fast-xml-parser');
const he = require('he'); // For XML entity decoding

const xml = '<root><item>Hello, World!</item></root>';
const options = {
  attributeNamePrefix: '@_',
  attrNodeName: 'attr', // default is 'false'
  textNodeName: '#text',
  ignoreAttributes: false,
  ignoreNameSpace: false,
  allowBooleanAttributes: false,
  parseNodeValue: true,
  parseAttributeValue: true,
  trimValues: true,
  cdataTagName: '__cdata', // default is 'false'
  cdataPositionChar: '\\c',
  parseTrueNumberOnly: false,
  arrayMode: false, // "strict"
  stopNodes: ['parse-me-as-string']
};

const jsonObj = parse(xml, options);
console.log(jsonObj);
