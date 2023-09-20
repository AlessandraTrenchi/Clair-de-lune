import React, { Component } from 'react';
import xml2js from 'xml2js';

class Final extends Component {
  constructor() {
    super();
    this.state = {
      stories: [],
    };
  }

  componentDidMount() {
    // Sostituisci 'URL_DEL_TUO_FILE_XML' con l'URL effettivo del tuo file XML
    fetch('/bijoux.xml')
      .then((response) => response.text())
      .then((xmlData) => {
        const parser = new xml2js.Parser();
        parser.parseString(xmlData, (err, result) => {
          if (err) {
            console.error(err);
          } else {
            // Estrai i dati delle storie dall'analisi XML
            const stories = result.root.div;

            this.setState({ stories });
          }
        });
      })
      .catch((error) => {
        console.error('Errore nel caricamento del file XML:', error);
      });
  }

  render() {
    const { stories } = this.state;

    return (
      <div>
        {stories.map((story, index) => (
          <div key={index}>
            <h2>{story['$']['xml:id']}</h2> {/* Corretto l'accesso all'attributo xml:id */}
            {/* Aggiungi qui il codice per visualizzare l'immagine sopra il testo */}
            <p>{story['_']}</p> {/* Mostra il testo della storia */}
          </div>
        ))}
      </div>
    );
  }
}

export default Final;
