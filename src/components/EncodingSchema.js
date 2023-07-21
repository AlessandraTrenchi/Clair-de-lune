import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import React, { Component } from 'react';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';


class EncodingSchema extends Component {
  render() {
    const xmlCode = `
  <back>
  <interpGrp type="emotions">
          <desc>Emotions encoded in the text</desc>
          <interp xml:id="serenity" type="positive">Serenity </interp>
          <interp xml:id="joy" type="positive">Joy</interp>
          <interp xml:id="ecstasy" type="positive">Ecstasy</interp>

          <interp xml:id="acceptance" type="positive">Acceptance </interp>
          <interp xml:id="trust" type="positive">Trust </interp>
          <interp xml:id="admiration" type="negative">Admiration</interp>

          <interp xml:id="interest" type="positive">Interest</interp>
          <interp xml:id="anticipation" type="positive">Anticipation</interp>
          <interp xml:id="vigilance" type="positive-or-negative">Vigilance</interp>

          <interp xml:id="pensiveness" type="negative">Pensiveness</interp>
          <interp xml:id="sadness" type="negative">Sadness</interp>
          <interp xml:id="grief" type="negative">Grief</interp>

          <interp xml:id="boredom" type="negative">Boredom</interp>
          <interp xml:id="disgust" type="negative">Disgust</interp>
          <interp xml:id="loathing" type="negative">Loathing</interp>

          <interp xml:id="annoyance" type="negative">Annoyance</interp>
          <interp xml:id="anger" type="negative">Anger</interp>
          <interp xml:id="rage" type="negative">Rage</interp>

          <interp xml:id="apprehension" type="negative">Apprehension</interp>
          <interp xml:id="fear" type="negative">Fear</interp>
          <interp xml:id="terror" type="negative">Terror</interp>

          <interp xml:id="distraction" type="negative">Distraction</interp>
          <interp xml:id="surprise" type="negative">Surprise</interp>
          <interp xml:id="amazement" type="negative">Amazement</interp>

          <interp xml:id="love" type="positive">Love </interp>
          <interp xml:id="remorse" type="negative">Remorse</interp>
          <interp xml:id="shame" type="negative">Shame</interp>
          <interp xml:id="pride" type="positive">Pride</interp>
          <interp xml:id="hope" type="positive">Hope</interp>
          <interp xml:id="cynism" type="positive">Cynicism</interp>
          <interp xml:id="envy" type="negative">Envy</interp>
          <interp xml:id="contempt" type="negative">Contempt</interp>

        </interpGrp>

        <interpGrp type="emotion-causes">
          <desc>Causes linked to emotions encoded in the text</desc>
          <interp xml:id="cause-character">A character that can affect the emotional state of another character.</interp>
          <interp xml:id="cause-event">Event, that can influence a character's state (e.g. someone's death) </interp>
        </interpGrp>


  </back>
  `;


  return (
       <div>
         <SyntaxHighlighter language="xml" style={nightOwl} wrapLongLines='true'>
           {xmlCode}
         </SyntaxHighlighter>
       </div>
     );
   }
 }

 export default EncodingSchema;
