const fs = require('fs');
const CETEI = require('CETEI');

// Funzione per applicare il foglio di stile XSLT a un file XML utilizzando CETEIcean
const applyXSLT = (xmlPath, xsltPath, outputPath) => {
  const CETEIceanInstance = new CETEI();
  CETEIceanInstance.getHTML5(xmlPath, (data) => {
    data = CETEIceanInstance.transform(xsltPath, data);

    // Scrivi il risultato in un nuovo file
    fs.writeFileSync(outputPath, data);

    console.log(`Trasformazione completata per ${xmlPath}`);
  });
};

// Elenco dei file XML da trasformare
const xmlFiles = [
'src/text/apparition.xml',
'src/text/bijoux.xml',
'src/text/clair-de-lune.xml',
'src/text/conte-de-noel.xml',
'src/text/coup-d-etat.xml',
'src/text/l-enfant.xml',
'src/text/le-loup.xml',
'src/text/le-perdon.xml',
'src/text/legende-mont-st-michel.xml',
'src/text/mlle-coccote.xml',
'src/text/reine-hortense.xml',
];

// Percorso del file XSLT
const xsltPath = 'src/text/stile.xslt';
// Percorso di output per i file trasformati
const outputDir = 'src/text/output';

// Assicurati che la directory di output esista
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Applica il foglio di stile XSLT a ciascun file XML
xmlFiles.forEach((xmlFile) => {
  const inputPath = xmlFile;
  const outputPath = `${outputDir}/${xmlFile}`;
  applyXSLT(inputPath, xsltPath, outputPath);
});
