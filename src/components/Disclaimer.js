import React from 'react';
import Footer from './Footer';
const Disclaimer = () => {
  return (
    <div>
      <h2>Disclaimer</h2>
      <p className='para'>
        The following text is sourced from online content and has been annotated using the TEI (Text Encoding Initiative) standard.
        The TEI is an international standard for encoding and exchanging textual materials in digital form.
        The annotations applied to this text aim to provide additional contextual information and enhance the reading experience.
      </p>
      <p className='para'>
        Please note that the annotations are provided for informational purposes only and may not be exhaustive or error-free.
        The original content and its annotations may be subject to intellectual property rights or other restrictions.
        Therefore, the use and interpretation of the text should be done in compliance with applicable laws and regulations.
      </p>
      <p className='para'>
        The annotations and their placement within the text are based on the interpretation and judgment of the annotators.
        They do not represent official or definitive explanations and should not be considered as such.
        Users are encouraged to consult additional sources and references for comprehensive understanding and analysis.
      </p>
      <p className='para'>
        By accessing and using this text, you agree to acknowledge and abide by the terms and conditions mentioned in this disclaimer.
        If you do not agree with these terms, please refrain from using the text and its annotations.
      </p>
      <p><Footer/></p>
    </div>
  );
};

export default Disclaimer;
