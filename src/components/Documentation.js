import React from 'react';
import { Link } from 'react-router-dom';
import Network from './Network';
import Footer from './Footer';
import EncodingSchema from './EncodingSchema';
import { CodeBlock } from "react-code-blocks";
import App from '../App';
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
        in his work.</p>
      </div>
      <div className='textlu'>
      <h2>The Author</h2>
      <p className='disco'>
        Guy de Maupassant was a 19th-century French author, famous for his short
        stories. As a representative of the Naturalist school, he used the short
        story form in order to depict human lives, their destinies, and social
        influences around them, from a disillusioned and often pessimistic point
        of view.
        <div className="link"><Link to="/">Read more</Link></div>
      </p>
      </div>
      <div className='textlu'>
      <h2>Short stories</h2>
      <p className='disco'>
        Short stories are designed to be read in one sitting and most often
        center around a specific event or a sequence of interconnected events,
        with limited characters. They have a long history and can be found in
        the form of legends, myths, folk tales, fairy tales, tall tales, fables,
        and anecdotes in ancient societies worldwide, while the modern short
        story as we know it today emerged during the early 19th century.
        <br />
        <br />
        Their purpose is to create a particular emotional or atmospheric impact,
        or, as Edgar Allan Poe puts it, <i>unity of effect</i>, which refers to
        the story&apos;s ability to evoke a specific emotional or psychological
        response in the reader. Poe believed that every aspect of a short
        story, whether literal or symbolic, should work together to create and
        maintain this desired effect.
      </p>
      </div>
      <div className='textlu'><h2>Project aims</h2>
      <p className='disco'>
        Our project aims to provide an alternative close reading to Maupassant&apos;s
        collection by focusing on how the author delivers the emotional states
        of his characters throughout the text. Our critical contribution to the
        extant document is based on the following questions:
        <ul>
        <li>What are the emotions more strongly present throughout short stories?</li>

        <li>Are there any patterns regarding the way they relate to the
          appearance of other emotions?</li>

        <li>To what extent do they manifest between the characters and external
          events?</li>

        </ul>
        </p>
        </div>
        <div className='textlu'>
      <h2>Encoding model</h2>
      <p className='disco'>
        To achieve the goals of our project and create an edition that follows the paradigm of digital scholarly editing practices, we first
        had to establish an encoding model for the meaningful handling of our textual data, which would serve as the foundation for conducting the analyses needed
        for answering our research questions and rendering the final edition.<br /><br />

        Creating a digital encoding model for emotions in the literary domain is an intricate task, as emotions are tied to  a character&apos;s <i> experience </i> of their surroundings, an experience that is delivered to the reader
        through the author&apos;s narrative techniques.
        It is therefore a task that involves a <b>dual subjectivity</b>, related to the individuality that emotional states have, and also the fact that these states belong to a complex layer of the text, which is the real of interpretation.<br /><br />

        In the DH domain, however, subjectivity is a natural component in the process of modeling ambiguous data in an unambiguous way, as a model’s design requires choices that must have some level of arbitrariness. (how subjective is your model 121).
        This paradox should not be discouraging, but as Elena Pierazzo continues, “ the recognition of the social component in the building of consensus and ultimately of what we can consider to fulfil scientific expectations, seems to offer a more interesting approach in the evaluation of digital methodology.”<br /><br />

        To create an unambiguous model that entails the necessary subjectivity and scholarly nature, the following choices were made:<br /><br />
<ul>
        <li>Adoption of an existing schema: The Plutchik wheel of emotions has been widely adopted… psychology and sentiment analysis… Arsemotica which has been enriched.</li>
        <li>To this ordeal, although it was alluring to adopt the most complex emotions (e.g. remorse and regret) we chose to stick to the basic and complex emotions, otherwise annotations would be subject to different interpretations. A few emotions were kept however, based on both 1. their more or less understandable definition, e.g. shame and contempt and 2. their occurrence in the text.</li>
        <li>Sticking to the emotions of the main character as their thoughts and actions belong to the foundation to the short story, serving towards achieving unity of effect; as often the narrator takes their point of view - and for providing a more concise visualisation.</li>
</ul>
</p>

</div>

        <div className='textlu'>
        <h2>Text encoding</h2>
        <p className='disco'>

        The Text Encoding Initiative is a valuable tool as it defines not so much a standard, rigid model  but more of an architecture that allows for interchangeable encoding schemas. Its structure facilitates diversity of theory which is key in the field of digital literature.  Although the TEI vocabulary has not expanded enough to include all forms of interpretation, its customisable nature allows one to form an encoding schema based on one’s goal, as long as they adhere to the guidelines, using a standard set of properties: a name or canonical identifier; a description of its intended meaning (supplied in one or several natural languages); where possible, an indication of equivalent objects in other systems;<br /><br />
        For encoding the specific instances of emotions, we adopted the{' '}
        <u>interp</u> tags, which refer to three categories of interpretative
        annotations throughout the text.
      </p>

  </div>
      <div className='code-cont'><div className='code'>
      <EncodingSchema/>
      </div>
      </div>
      <div className='textlu'>
      <p className='disco'>
        For the emotions classification, we have adopted the Plutchik <a href="https://link.springer.com/referenceworkentry/10.1007/978-3-319-28099-8_547-1">
        Psycho-Evolutionary Theory of
        Emotions</a>, that aims to categorise emotional reactions to stimuli. The theory was first applied in
        linguistic studies, resulting to a structural model of eight basic levels of emotions,
        and the taxonomy of the relationship between both the basic and deriving complex emotional states.

        The model has been widely used in the field of psychology, but also sentiment analysis in literary texts.</p>
        </div>
        <div>

      <img src="https://public-media.interaction-design.org/images/uploads/70cb81fe1b87d2703d5c2f127841efad.jpg" alt="Plutchik wheel of emotions" className='imm'/>
      </div>


      <div className='textlu'>
      <h2>Ontology</h2>
      <p className='disco'>
      The project implements the OntoEmotion ontology, developed at Universidad Complutense de Madrid, which mirrors well founded psychological models -especially that of
      Plutchik and Parrot - by structuring emotional categories in a taxonomy, including 87 emotional concepts in total.
      The <b> first level</b> includes the basic emotions of Sadness, Happiness, Surprise,
      Fear and Anger, which integrate more emotions which appear in
      other well-established models. The number of levels under each basic emotion depends
      on the level of available specification for it; for example, Anger is specialized in Agitation, Annoyance,
      Hate, Fury, Displesure, Sulking, etc. <br /><br />

      The ontology serves for categorizing emotion-denoting words in text; written in OWL, it has two root concepts, Emotion
      (related to the emotion category) and Word(that denotes the emotion). It was originally populated by about
      250 word instances in the languages of English and Spanish, and then - thanks to the <a href="http://www.di.unito.it/~patti/pub.html#">ArsEmotica project</a> by the University of Torino - enriched with 450 Italian
      words referring to the 87 emotional categories of OntoEmotion, along with the OWL object property hasSynonym to define synonymy relations amongst words. </p>
      </div>
      <div className='textlu'>
      <h2>Publication</h2>
      </div>

      <div className='textlu'>
      <h2>Bibliography</h2>
      <p className='disco'>
      <ul>
      <li>Virginia Francisco, Pablo Gervás, and Federico Peinado. Ontological reasoning to configure emotional voice synthesis. In
Proc. of Web Reasoning and Rule Systems, RR 2007, volume
4524 of LNCS, pages 88–102. Springer, 2007.</li>
[10] Virginia Francisco, Federico Peinado, Raquel
    <li>  W. Parrot. Emotions in Social Psychology. Psychology Press,
     Philadelphia, 2001.</li>
     <li>Baldoni, Matteo et al. ‘From Tags to Emotions: Ontology-driven Sentiment Analysis in the Social Semantic Web’. 1 Jan. 2012 : 41 – 54.</li>

     </ul>
     </p>
     </div>

      <Footer />
    </div>
  </>
);
};


export default Documentation;
