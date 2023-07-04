import React from 'react';
import { Link } from 'react-router-dom';
import code from '../images/code.jpg';
import Network from './Network';
import Footer from './Footer';

const Documentation = () => {
  return (
    <>
    <div className='cielo1'>
    <div className='textlu'>
      <h2>Introduction</h2>
      <p className='disco'>
        “Project name” is a digital edition of the short stories collection
        “Clair de Lune” by Guy de Maupassant, which incorporates digital
        scholarly editions tools in order to shine light on the use of emotions
        in his work.
      </p></div>
      <div className='textlu'>
      <h2>The Author</h2>
      <p className='disco'>
        Guy de Maupassant was a 19th-century French author, famous for his short
        stories. As a representative of the Naturalist school, he used the short
        story form in order to depict human lives, their destinies, and social
        influences around them, from a disillusioned and often pessimistic point
        of view. 
        <p className="link"><Link to="/">Read more</Link></p>
      </p></div>
      <div className='textlu'>
      <h2>Short stories</h2>
      <p className='disco'>
        Short stories are designed to be read in one sitting and most often
        center around a specific event or a sequence of interconnected events,
        with limited characters. They have a long history and can be found in
        the form of legends, myths, folk tales, fairy tales, tall tales, fables,
        and anecdotes in ancient societies worldwide, while the modern short
        story as we know it today emerged during the early 19th century.
      </p>
      <p className='disco'> 
        Their purpose is to create a particular emotional or atmospheric impact,
        or, as Edgar Allan Poe puts it, <i>unity of effect</i>, which refers to
        the story&apos;s ability to evoke a specific emotional or psychological
        response in the reader. Poe believed that every aspect of a short
        story, whether literal or symbolic, should work together to create and
        maintain this desired effect.
      </p></div>
      <div className='textlu'><h2>Project aims</h2>
      <p className='disco'>
        Our project aims to provide an alternative close reading to Maupassant&apos;s
        collection by focusing on how the author delivers the emotional states
        of his characters throughout the text. Our critical contribution to the
        extant document is based on the following questions:
      </p>
        <p className='disco'>
          What are the emotions more strongly present throughout short stories,
          and are there any patterns regarding the way they relate to the
          appearance of other emotions?
        </p>
        <p className='disco'>
          To what extent do they manifest between the characters and external
          events?
        </p></div>
        <div className='textlu'>
      <h2>Encoding schema</h2>
      <p className='disco'>
        Our project follows the digital paradigm of digital scholarly editing
        with the implementation of textual markup according to TEI guidelines,
        for conducting textual analysis for answering our research questions.
        For encoding the specific instances of emotions, we adopted the{' '}
        <u>interp</u> tags, which refer to three categories of interpretative
        annotations throughout the text
      </p></div>
      <p><img src={code} alt="Documentation code" className='imm'></img></p>
      <div className='textlu'><p className='disco'>
        For the emotions classification, we have adopted the Plutchik wheel of
        emotions, which is a widely used abstraction of emotional states in the
        field of psychology, but also sentiment analysis in literary texts.</p></div>
      <p><img src="https://public-media.interaction-design.org/images/uploads/70cb81fe1b87d2703d5c2f127841efad.jpg" alt="Plutchik wheel of emotions" className='imm'/></p>
      <div className='textlu'><h2>Ontology</h2>
      <p className='disco'>Write about the ontology</p></div>
      <div className='textlu'><h2>Network analysis</h2></div>
      <div className='textlu'><h2>Publication</h2></div>
      <p><Footer/></p></div>
    </>
  );
};

export default Documentation;
