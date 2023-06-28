import React from 'react';

const Encoding = () => {
  return (
    <div>
      <interpGrp type="emotions">
        <desc>Emotions encoded in the text</desc>
        <interp xml:id="joy" type="positive">Joy</interp>
        <interp xml:id="trust" type="positive">Trust</interp>
        <interp xml:id="anticipation" type="positive">Anticipation</interp>
        <interp xml:id="sadness" type="negative">Sadness</interp>
        <interp xml:id="disgust" type="negative">Disgust</interp>
        <interp xml:id="anger" type="negative">Anger</interp>
        <interp xml:id="fear" type="negative">Fear</interp>
        <interp xml:id="surprise" type="negative">Surprise</interp>
      </interpGrp>

      <interpGrp type="emotion-causes">
        <desc>Causes linked to emotions encoded in the text</desc>
        <interp xml:id="cause-character">
          A character that can affect the emotional state of another character.
        </interp>
        <interp xml:id="cause-event">
          Event, that can influence a character's state (e.g. someone's death)
        </interp>
      </interpGrp>

      <interpGrp type="emotion-effect">
        <desc>Effects linked to emotions encoded in the text</desc>
        <interp xml:id="positive-effect" type="positive">
          A positive effect to a character
        </interp>
        <interp xml:id="negative-effect" type="negative">
          A negative effect to a character
        </interp>
      </interpGrp>
    </div>
  );
};

export default Encoding;
