import xml.etree.ElementTree as ET

def extractXmlFragment(xml_file_path, xml_id, element_type):
    try:
        # Parse the XML file
        tree = ET.parse(xml_file_path)
        root = tree.getroot()

        # Define the namespaces if needed
        namespaces = {
            'tei': 'http://www.tei-c.org/ns/1.0',
            'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
            'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
            'ArsEmotica': 'http://130.192.212.225/fuseki/ArsEmotica-core#',
        }

        # Build an XPath query to find the element with the specified xml:id and type attributes
        xpath_query = f'.//*[@xml:id="{xml_id}" and @type="{element_type}"]'

        # Use find() to get the first matching element
        element = root.find(xpath_query, namespaces)

        if element is not None:
            # Serialize the element to a string (including its children)
            return ET.tostring(element, encoding='unicode')
        else:
            return f'XML fragment with xml:id "{xml_id}" and type="{element_type}" not found'

    except Exception as e:
        return f'Error loading XML content: {str(e)}'
