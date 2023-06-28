import React from 'react';

const Encoding = () => {
  return (
    <div>
      <div type="emotions">
        <p>Emotions encoded in the text</p>
        <p id="joy" type="positive">Joy</p>
        <p id="trust" type="positive">Trust</p>
        <p id="anticipation" type="positive">Anticipation</p>
        <p id="sadness" type="negative">Sadness</p>
        <p id="disgust" type="negative">Disgust</p>
        <p id="anger" type="negative">Anger</p>
        <p id="fear" type="negative">Fear</p>
        <p id="surprise" type="negative">Surprise</p>
      </div>

      <div type="emotion-causes">
        <p>Causes linked to emotions encoded in the text</p>
        <p id="cause-character">
          A character that can affect the emotional state of another character.
        </p>
        <p id="cause-event">
          Event, that can influence a character's state (e.g. someone's death)
        </p>
      </div>

      <div type="emotion-effect">
        <p>Effects linked to emotions encoded in the text</p>
        <p id="positive-effect" type="positive">
          A positive effect to a character
        </p>
        <p id="negative-effect" type="negative">
          A negative effect to a character
        </p>
      </div>
    </div>
  );
};

export default Encoding;
