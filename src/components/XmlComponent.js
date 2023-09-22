import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import CETEIcean from 'CETEIcean';
import CETEI from 'CETEIcean';

const XmlComponent = ({ xmlId }) => {
  const xmlContainerRef = useRef(null);

  useEffect(() => {
    const loadXmlContent = async () => {
      try {
        const texturl = 'https://raw.githubusercontent.com/AlessandraTrenchi/Claire-de-lune/main/src/text/bijoux.xml';
        const response = await fetch(texturl);
        console.log('Fetching XML data from:', texturl);

        const xmlText = await response.text();
        console.log('xmlTEXT',xmlText);

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        console.log('xmldoc',xmlDoc);

//         const xmlbegin = `<TEI xmlns="http://www.tei-c.org/ns/1.0"
//              xmlns:tei="http://www.tei-c.org/ns/1.0"
//              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
//              xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
//              xmlns:ArsEmotica-core="http://130.192.212.225/fuseki/ArsEmotica-core#">
//
//           <teiHeader>
//               <fileDesc>
//                  <titleStmt>
//                     <title>Clair de Lune</title>
//                     <author>Guy de Maupassant</author>
//                  </titleStmt>
//                  <editionStmt>
//                     <edition>Editions Gallimard, 1998</edition>
//                     <respStmt>
//                        <resp>Encoding</resp>
//                        <persName>Chloe Papadopoulou</persName>
//                        <persName>Alessandra Trenchi</persName>
//                        <orgName>Alma Mater Studiorum - University of Bologna</orgName>
//                     </respStmt>
//                  </editionStmt>
//                  <publicationStmt>
//                     <authority>Our project name</authority>
//                     <availability>
//                        <licence target="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</licence>
//                     </availability>
//                  </publicationStmt>
//                  <sourceDesc>
//                     <bibl>
//                        <author>Guy De Maupassant</author>, <title>Clair de lune et autres nouvelles</title>.
//                        <publisher>Editions Gallimard</publisher>
//                        <date>1998</date>.
//                     </bibl>
//                  </sourceDesc>
//               </fileDesc>
//
//           <xenoData>
//             <rdf:RDF>
//               <rdf:Description tei:ref="#joy" rdf:about="http://130.192.212.225/fuseki/ArsEmotica-core#Joy">
//                   <rdfs:subClassOf rdf:resource="http://130.192.212.225/fuseki/ArsEmotica-core#BasicEmotion"/>
//               </rdf:Description>
//               <rdf:Description tei:ref="#trust" rdf:about="http://130.192.212.225/fuseki/ArsEmotica-core#Trust">
//                 <rdfs:subClassOf rdf:resource="http://130.192.212.225/fuseki/ArsEmotica-core#BasicEmotion"/>
//               </rdf:Description>
//               <rdf:Description tei:ref="#anger" rdf:about="http://130.192.212.225/fuseki/ArsEmotica-core#Anger">
//                 <rdfs:subClassOf rdf:resource="http://130.192.212.225/fuseki/ArsEmotica-core#BasicEmotion"/>
//               </rdf:Description>
//               <rdf:Description tei:ref="#sadness" rdf:about="http://130.192.212.225/fuseki/ArsEmotica-core#Sadness">
//                 <rdfs:subClassOf rdf:resource="http://130.192.212.225/fuseki/ArsEmotica-core#BasicEmotion"/>
//               </rdf:Description>
//               <rdf:Description tei:ref="#fear"  rdf:about="http://130.192.212.225/fuseki/ArsEmotica-core#Fear">
//                 <rdfs:subClassOf rdf:resource="http://130.192.212.225/fuseki/ArsEmotica-core#BasicEmotion"/>
//               </rdf:Description>
//               <rdf:Description tei:ref="#disgust" rdf:about="http://130.192.212.225/fuseki/ArsEmotica-core#Disgust">
//                 <rdfs:subClassOf rdf:resource="http://130.192.212.225/fuseki/ArsEmotica-core#BasicEmotion"/>
//               </rdf:Description>
//               <rdf:Description tei:ref="#surprise" rdf:about="http://130.192.212.225/fuseki/ArsEmotica-core#Surprise">
//                 <rdfs:subClassOf rdf:resource="http://130.192.212.225/fuseki/ArsEmotica-core#BasicEmotion"/>
//               </rdf:Description>
//               <rdf:Description tei:ref="#anticipation" rdf:about="http://130.192.212.225/fuseki/ArsEmotica-core#Anticipation">
//                 <rdfs:subClassOf rdf:resource="http://130.192.212.225/fuseki/ArsEmotica-core#BasicEmotion"/>
//               </rdf:Description>
//               <rdf:Description tei:ref="#love" rdf:about="http://130.192.212.225/fuseki/ArsEmotica-core#Love">
//                 <rdfs:subClassOf rdf:resource="http://130.192.212.225/fuseki/ArsEmotica-core#ComplexEmotion"/>
//               </rdf:Description>
//               <rdf:Description tei:ref="#grief" rdf:about="http://130.192.212.225/fuseki/ArsEmotica-core#Grief">
//                 <rdfs:subClassOf rdf:resource="http://130.192.212.225/fuseki/ArsEmotica-core#ComplexEmotion"/>
//               </rdf:Description>
//               <rdf:Description tei:ref="#envy" rdf:about="http://130.192.212.225/fuseki/ArsEmotica-core#Envy">
//                 <rdfs:subClassOf rdf:resource="http://130.192.212.225/fuseki/ArsEmotica-core#ComplexEmotion"/>
//               </rdf:Description>
//               <rdf:Description tei:ref="#admiration" rdf:about="http://130.192.212.225/fuseki/ArsEmotica-core#Admiration">
//                 <rdfs:subClassOf rdf:resource="http://130.192.212.225/fuseki/ArsEmotica-core#BasicEmotion"/>
//               </rdf:Description>
//               <rdf:Description tei:ref="#shame" rdf:about="http://130.192.212.225/fuseki/ArsEmotica-core#Shame">
//                 <rdfs:subClassOf rdf:resource="http://130.192.212.225/fuseki/ArsEmotica-core#ComplexEmotion"/>
//               </rdf:Description>
//               <rdf:Description tei:ref="#ecstasy" rdf:about="http://130.192.212.225/fuseki/ArsEmotica-core#Ecstasy">
//                 <rdfs:subClassOf rdf:resource="http://130.192.212.225/fuseki/ArsEmotica-core#ComplexEmotion"/>
//               </rdf:Description>
//               <rdf:Description tei:ref="#distraction" rdf:about="http://130.192.212.225/fuseki/ArsEmotica-core#Distraction">
//                 <rdfs:subClassOf rdf:resource="http://130.192.212.225/fuseki/ArsEmotica-core#ComplexEmotion"/>
//               </rdf:Description>
//               <rdf:Description tei:ref="#despair" rdf:about="http://130.192.212.225/fuseki/ArsEmotica-core#Despair">
//                 <rdfs:subClassOf rdf:resource="http://130.192.212.225/fuseki/ArsEmotica-core#ComplexEmotion"/>
//               </rdf:Description>
//
//               <rdf:Description tei:ref="#despair" rdf:about="http://130.192.212.225/fuseki/ArsEmotica-core#Despair">
//                 <rdfs:subClassOf rdf:resource="http://130.192.212.225/fuseki/ArsEmotica-core#ComplexEmotion"/>
//               </rdf:Description>
//             </rdf:RDF>
//           </xenoData>
//
//         </teiHeader>
//         <text>
//           <body> `;
//
//         const xmlend = ` </body>
//         <back>
//         <interpGrp type="emotions">
//                 <desc>Emotions encoded in the text</desc>
//                 <interp xml:id="joy" type="positive">Joy</interp>
//                 <interp xml:id="trust" type="positive">Trust </interp>
//                 <interp xml:id="love" type="positive">Love </interp>
//                 <interp xml:id="anticipation" type="positive">Anticipation</interp>
//                 <interp xml:id="sadness" type="negative">Sadness</interp>
//                 <interp xml:id="grief" type="negative">Grief</interp>
//                 <interp xml:id="disgust" type="negative">Disgust</interp>
//                 <interp xml:id="anger" type="negative">Anger</interp>
//                 <interp xml:id="envy" type="negative">Envy</interp>
//                 <interp xml:id="fear" type="negative">Fear</interp>
//                 <interp xml:id="terror" type="negative">Terror</interp>
//                 <interp xml:id="acceptance" type="negative">Acceptance</interp>
//                 <interp xml:id="admiration" type="negative">Admiration</interp>
//                 <interp xml:id="distraction" type="negative">Distraction</interp>
//                 <interp xml:id="surprise" type="negative">Surprise</interp>
//                 <interp xml:id="contempt" type="negative">Contempt</interp>
//                 <interp xml:id="ecstasy" type="positive">Ecstasy</interp>
//                 <interp xml:id="remorse" type="negative">Remorse</interp>
//                 <interp xml:id="shame" type="negative">Shame</interp>
//                 <interp xml:id="pride" type="positive">Pride</interp>
//                 <interp xml:id="hope" type="positive">Hope</interp>
//
//
//               </interpGrp>
//
//               <interpGrp type="emotion-causes">
//                 <desc>Causes linked to emotions encoded in the text</desc>
//                 <interp xml:id="cause-character">A character that can affect the emotional state of another character.</interp>
//                 <interp xml:id="cause-event">Event, that can influence a character's state (e.g. someone's death) </interp>
//               </interpGrp>
//
//               <interpGrp type="emotion-effect">
//                 <desc>Effects linked to emotions encoded in the text</desc>
//                 <interp xml:id="positive-effect" type="positive">A positive effect to a character </interp>
//                 <interp xml:id="negative-effect" type="negative">A negative effect to a character</interp>
//
//         </interpGrp>
//         </back>
//         </text>
//         </TEI>
// `;
        const fragment = xmlDoc.querySelector(`div[type="story"][xml\\:id="${xmlId}"]`);
    //     const xmlstory= `<div type="story" xml:id="les-bijoux">
    //       <head>LES BIJOUX</head>
    // <p>    <persName ref="#M-Lantin">M. Lantin</persName> ayant rencontré cette jeune <persName ref="#Madame-Lantin">fille</persName>, dans une soirée, chez son sous-chef de bureau, <interp ana="#love ">l'amour</interp> l'enveloppa comme un filet.</p>
    // <p>     C'était la fille d'un percepteur de province, mort depuis plusieurs années. Elle était venue ensuite à Paris avec sa mère, qui fréquentait quelques familles bourgeoises de son quartier dans l'<interp ana="#anticipation">espoir</interp> de marier la jeune personne. Elles étaient pauvres et honorables, tranquilles et douces. La jeune fille semblait le type absolu de l'honnête femme à laquelle le jeune homme sage rêve de confier sa vie. Sa beauté modeste avait un charme de pudeur angélique, et l'imperceptible sourire qui ne quittait point ses lèvres semblait un reflet de son cœur.</p>
    // <p>     Tout le monde chantait ses louanges ; tous ceux qui la connaissaient répétaient sans fin : « Heureux celui qui la prendra. On ne pourrait trouver mieux. »</p>
    // <p>     <persName ref="#M-Lantin">M. Lantin </persName>, alors commis principal au ministère de l'Intérieur, aux appointements annuels de trois mille cinq cents francs, la demanda en mariage et l'épousa.</p>
    // <p>     Il fut avec elle invraisemblablement <interp ana="#joy">heureux</interp>. Elle gouverna sa maison avec une économie si adroite qu'ils semblaient vivre dans le luxe. Il n'était point d'attentions, de délicatesses, de chatteries qu'elle n'eût pour son mari ; et la séduction de sa personne était si grande que, six ans après leur rencontre, il l'<interp ana="#love">aimait</interp> plus encore qu'aux premiers jours.</p>
    // <p>     Il ne <interp ana="#anger">blâmait </interp> en elle que deux goûts, celui du théâtre et celui des bijouteries fausses.</p>
    // <p>     Ses amies (elle connaissait quelques femmes de modestes fonctionnaires) lui procuraient à tous moments des loges pour les pièces en vogue, même pour les premières représentations ; et elle traînait, bon gré, mal gré, son mari à ces divertissements qui le fatiguaient affreusement après sa journée de travail. Alors il la supplia de consentir à aller au spectacle avec quelque dame de sa connaissance qui la ramènerait ensuite. Elle fut longtemps à céder, trouvant peu convenable cette manière d'agir. Elle s'y décida enfin par complaisance, et il lui en sut un gré infini.</p>
    // <p>     Or, ce goût pour le théâtre fit bientôt naître en elle le besoin de se parer. Ses toilettes demeuraient toutes simples, il est vrai, de bon goût toujours, mais modestes ; et sa grâce douce, sa grâce irrésistible, humble et souriante, semblait acquérir une saveur nouvelle de la simplicité de ses robes, mais elle prit l'habitude de pendre à ses oreilles deux gros cailloux du Rhin qui simulaient des diamants, et elle portait des colliers de perles fausses, des bracelets en similor, des peignes agrémentés de verroteries variées jouant les pierres fines.</p>
    // </div>`

        // const fragment = xmlbegin + xmlstory + xmlend;

        console.log('xmlfragment',fragment);

        if (xmlText) {

          var CETEIcean = new CETEI()
 CETEIcean.getHTML5(texturl, function(data) {
 document.getElementById("TEI").appendChild(data)
 })
        } else {
          throw new Error('XML fragment not found');
        }
      } catch (error) {
        console.error('Error loading XML content:', error);

      }
    };

    loadXmlContent();
  }, [xmlId]);

  return (
    <div className="xml-component">
      <div id="TEI" ref={xmlContainerRef} />
    </div>
  );
};

XmlComponent.propTypes = {
  xmlId: PropTypes.string.isRequired,
};

export default XmlComponent;
