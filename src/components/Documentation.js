import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StickyBox from "react-sticky-box";
import Footer from './Footer';
import EncodingSchema from './EncodingSchema';
import GraphCode from './GraphCode';


const Documentation = () => {
  const [activeFragment, setActiveFragment] = useState('');
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionIds = [
        'introduction',
        'the-author',
        'short-stories',
        'project-aims',
        'encoding-model',
        'emotional-framework',
        'declaration',
        'ontology',
        'text-encoding',
        'publication',
        'network-analysis',
        'bibliography',
      ];
  
      // Find the section that is currently in view
      let currentSection = '';
      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= scrollY + 10) {
          currentSection = sectionId;
        }
      }
  
      setActiveFragment(currentSection);
    };
  
    // Listen for scroll events and initial URL fragment
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  
    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
    <div className="row-sidebar">
   <StickyBox offsetTop={20} offsetBottom={20}>
     <div className='side'>Sidebar
      <ul>
        <li><Link to="/Documentation#introduction" className={activeFragment === 'introduction' ? 'active' : ''}>Introduction</Link></li>
        <li><Link to="/Documentation#the-autor" className={activeFragment === 'the-autor' ? 'active' : ''}>The Author</Link></li>
        <li><Link to="/Documentation#short-stories" className={activeFragment === 'short-stories' ? 'active' : ''}>Short Stories</Link></li>
        <li><Link to="/Documentation#project-aims" className={activeFragment === 'project-aims' ? 'active' : ''}>Project Aims</Link></li>
        <li><Link to="/Documentation#encoding-model" className={activeFragment === 'encoding-model' ? 'active' : ''}>Encoding Model - Critical Choices</Link></li>
        <li><Link to="/Documentation#emotional-framework" className={activeFragment === 'emotional-framework' ? 'active' : ''}>Emotional Framework</Link></li>
        <li><Link to="/Documentation#declaration" className={activeFragment === 'declaration' ? 'active' : ''}>Declaration of Intent</Link></li>
        <li><Link to="/Documentation#ontology" className={activeFragment === 'ontology' ? 'active' : ''}>Ontology</Link></li>
        <li><Link to="/Documentation#text-encoding" className={activeFragment === 'text-encoding' ? 'active' : ''}>Text Encoding</Link></li>
        <li><Link to="/Documentation#publication" className={activeFragment === 'publication' ? 'active' : ''}>Publication</Link></li>
        <li><Link to="/Documentation#network-analysis" className={activeFragment === 'network-analysis' ? 'active' : ''}>Network Analysis</Link></li>
        <li><Link to="/Documentation#bibliography" className={activeFragment === 'bibliography' ? 'active' : ''}>Bibliography</Link></li>


        </ul></div>
   </StickyBox>
    </div>
                <div className='cielo1'>
                <div id='introduction'><div className='textlu'>
      <h2>Introduction</h2>
      <p className='disco'>
        “Clair de sentiments” is a digital edition of the short stories collection
        “Clair de Lune” by Guy de Maupassant, which incorporates digital
        scholarly editions tools in order to shine light on the use of emotions
        in his work.
      </p></div></div>
      <div className='the-autor'><div className='textlu'>
      <h2>The Author</h2>
      <p className='disco'>
        Guy de Maupassant was a 19th-century French author, famous for his short
        stories. As a representative of the Naturalist school, he used the short
        story form in order to depict human lives, their destinies, and social
        influences around them, from a disillusioned and often pessimistic point
        of view.
        <div className="link"><Link to="/">Read more</Link></div>
      </p></div></div>
      <div id='short-stories'><div className='textlu'>
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
      </p></div></div>
      <div id='project-aims'><div className='textlu'><h2>Project aims</h2>
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
        </p></div></div>
        <div id='encoding-model'><div className='textlu'>
      <h2>Encoding model - Critical choices</h2>
      <p className='disco'>
        To achieve the goals of our project and create an edition that follows the paradigm of digital scholarly editing practices, we first
        had to establish an encoding model for the meaningful handling of our textual data, which would serve as the foundation for conducting the analyses needed
        for answering our research questions and rendering the final edition.<br /><br />

        Creating a digital encoding model for emotions in the literary domain is an intricate task, as emotions are tied to  a character&apos;s <i> experience </i> of their surroundings, an experience that is delivered to the reader
        through the author&apos;s narrative techniques.
        It is therefore a task that involves a <b>dual subjectivity</b>, related to the individuality that emotional states have, and also the fact that these states belong to a complex layer of the text, which belongs in the realm of interpretation.<br /><br />

        In the DH domain, however, subjectivity is a natural component in the process of modeling ambiguous data in an unambiguous way, as a model’s design requires choices that must have some level of arbitrariness.
        This paradox should not be discouraging, but as Elena Pierazzo points out in the book <i>The Shape of Data in Digital Humanities</i>, “the recognition of the social component in the building of consensus and ultimately of what we can consider to fulfil scientific expectations, seems to offer a more interesting approach in the evaluation of digital methodology.”<br /><br />

        To create an unambiguous model that entails the necessary subjectivity and scholarly nature, the following choices were made:<br /><br /></p></div></div>
<div className='textlu'>
        <p className='disco'>Regarding the nature of emotions to be included in the annotation, we opted to implement to the widely accepted model by Robert Plutchik, whose emotion taxonomy
        has been adopted to the existing ontology of OntoEmotion and the ArsEmotica software.
        Even though our reference ontology includes multiple layers of emotions, we chose to stick to the most basic and straightforward
        categories (namely joy, anger, sadness, fear, disgust and anticipation). This was done to keep the annotated instances as unambiguous as possible, otherwise the text denoting more complex emotions would
        be inadvertedly more prone to different interpretations.
        A few emotions were kept, however, according to the following criteria:
        a. the extent to which they have a fixed, unambiguous definition, and
        b. their observed frequency in the texts.
        <br />
        For example, we included complex emotions such as <i>shame, envy, cynicism and contempt</i>, given both their frequent occurence and their more individual meaning, compared to
        emotions that are often just layers of their predecessor, as is the case with <i>fury</i> and <i>rage</i> or <i>anger</i>, for example.
        Lastly, we chose to restrict the annotation to only include the emotions of the main character, as their thoughts, actions and conversations
        are often the foundation of the narrative and the point of view of the narrator(not only in Guy de Maupassant&apos;s work but according to the canon of short stories
        in general). We consider this approach another important element towards achieving unity of effect, and for the demands of our project,
        focusing on one character also provides a more complete image of how emotions evolve throughout the story and furthemore, a
        a more concise visualisation.</p>
</div>


</div>


      <div className='cielo1'><div id='emotional-framework'><div className='textlu'>
      <h2>Emotional framework</h2>

      <p className='disco'>
For the emotions classification, we have adopted the schema inspired by Robert Plutchik&apos;s <a href="https://link.springer.com/referenceworkentry/10.1007/978-3-319-28099-8_547-1">
        Psycho-Evolutionary Theory of
        Emotions</a>, that aims to categorise emotional reactions to stimuli. The theory was first applied in
        linguistic studies, resulting to a structural model of eight basic levels of emotions,
        and the taxonomy of the relationship between both the basic and deriving complex emotional states.
        The eight primary emotions in Plutchik&apos;s theory are:

<li>Joy: happiness and pleasure.</li>
<li>Sadness: unhappiness or sorrow.</li>
<li>Anger: a strong feeling of displeasure or hostility.</li>
<li>Fear: an emotion triggered by a perceived threat or danger.</li>
<li>Surprise: a sudden and unexpected reaction to a stimulus.</li>
<li>Disgust: a feeling of aversion towards something unpleasant.</li>
<li>Anticipation: the expectation or excitement about an incoming event or possibility.</li>
<li>Trust: a belief in the reliability or goodness of someone or something.</li>
The Emotion
Wheel diagram demonstrates the relationships between primary and secondary emotions, where similar emotions are adjacent, and opposites are located across from each other.
Furthermore, each primary emotion can be intensified or weakened, leading to a total of 24 secondary emotions. For example, combining joy
and trust might result in feelings like optimism or love, while combining fear and surprise could lead to awe or anxiety.

        The model has been widely used in the field of psychology, but also sentiment analysis in text.</p></div>

        </div>
        <div className='cielo1'><div id='declaration'><div className='textlu'>
      <h2>Declaration of Intent</h2>

      <p className='disco'> In the course of this edition, our primary objective has been to delve into the intricate tapestry of emotions that intertwine with the narrative presented within the text. Emotions are a fundamental aspect of the human experience, and within the pages of this work, we have sought to uncover, analyze, and illuminate the various emotional states that play a pivotal role in shaping the narrative&lsquo;s essence.

Our exploration has led us to discern the nuances of joy, sadness, anticipation, love, anger, surprise, disgust, amazement, envy, and acceptance, each serving as a brushstroke on the canvas of human sentiment. Through meticulous analysis, we have strived to uncover not only the emotions themselves but also the underlying causes and effects that bind them, creating a rich and complex emotional landscape.

Emotions, as depicted in this text, are not mere abstractions; they are the lifeblood of the characters and events that unfold within its pages. They provide depth, resonance, and a profound connection between the reader and the narrative. In our pursuit, we have aimed to shed light on the emotional undercurrents that breathe life into the story, unveiling the intricate interplay between characters, events, and the emotions that drive them.

This edition stands as a testament to the significance of emotions in storytelling, as well as their capacity to resonate with readers on a profound level. Through our analysis, we have endeavored to provide insights into the emotional tapestry of the text, enriching our understanding of the human experience as it unfolds within these pages. </p></div>
        <div>

      <img src="https://public-media.interaction-design.org/images/uploads/70cb81fe1b87d2703d5c2f127841efad.jpg" alt="Plutchik wheel of emotions" className='imm'/>
      </div>


      <div id='ontology'><div className='textlu'>
      <h2>Ontology</h2>
      <p className='disco'>
      The OntoEmotion ontology was developed at Universidad Complutense de Madrid for categorizing emotion-denoting words in text, implementing well founded psychological models - namely the emotional
      frameworks Robert Plutchik and W. Gerrod Parrott - by structuring emotional categories in a taxonomy, including 87 emotional concepts in total.
      The <b> first level</b> includes the basic emotions of Sadness, Happiness, Surprise,
      Fear and Anger, which integrate more emotions which appear in
      other well-established models. The number of levels under each basic emotion depends
      on the level of available specification for it; for example, Anger is specialized in Agitation, Annoyance,
      Hate, Fury, Displesure, Sulking, etc. <br /><br />

      Written in OWL, OntoEmotion has two root concepts, Emotion
      (related to the emotion category) and Word(that denotes the emotion). It was originally populated by about
      250 word instances in the languages of English and Spanish, and then - thanks to the <a href="http://www.di.unito.it/~patti/pub.html#">ArsEmotica project</a> by the University of Torino -
      enriched with 450 Italian words referring to the 87 emotional categories of OntoEmotion, along with the OWL object property hasSynonym to define synonymy relations amongst words.  <br /><br />

      For the requirements of our project, we implemented ArsEmotica&apos;s extended version of the OntoEmotion ontology, and embedded all basic and a selection of complex emotions within the {'<xenoData>'} tags for
      RDF in order link our schema within the Semantic Web.</p>
      </div></div>

      <div id='text-encoding'><div className='textlu'>
      <h2>Text encoding</h2>
      <p className='disco'>
        Our project follows the digital paradigm of digital scholarly editing
        with the implementation of textual markup according to TEI guidelines,
        for conducting textual analysis for answering our research questions.
        For encoding the specific instances of emotions, we adopted the{' '}
        <u>interp</u> tags, which refer to three categories of interpretative
        annotations throughout the text.
      The Text Encoding Initiative is a valuable tool as it defines not so much a fixed model but more of an
      <b>architecture</b> that allows the creation of interchangeable encoding schemas, facilitating the <b>diversity of theory</b>
      which is key in the field of digital literature.  Although the TEI vocabulary has not expanded enough to include
      all forms of interpretation, we used its customisable standard accordingly in order to realise the our project&apos;s goals.
      <br /><br />
      The first section contains rdf data for each sentiment, wrapped inside the{'<xenoData>'} tag,
      useful for referring to canonical identifiers of elements inside the annotated text (in our case, each sentiment&apos;s id) and indication of equivalent objects in other systems,
      where we specified the correspondent sentiment URI given by the OntoEmotion ontology.
      <br /><br />
      For encoding the specific instances of emotional concepts, we adopted the {'<interpGrp>'}
      tags, which refer to three categories of interpretative
      annotations throughout the text. The first interpretative group refers to the emotions taxonomy according to our model and the ontology.
      Each sentiment is organised in the appropriate {'<interp>'} tag, along with its unique identifier and its type (positive or negative).
      <br /><br />
      The second interpretative group contains information that we deemed very relevant in the context of short stories, which is the
      provenience of sentiments, namely whether they are caused by an event, another character&apos;s actions or whether it is completely
      generated by the character&apos;s mental state. </p>
      </div></div>
      <div className='code'><div className='code-cont'><div className='code'></div>
    <EncodingSchema/>
    </div>


</div>





      <div id='publication'><div className='textlu'>
      <h2>Project Structure</h2>
      <p className='disco'>Inside the project root there are some main folders. </p>
      <p className='disco'><b className='bold'>Build</b>: contains the output of our production-ready build. It includes minified and optimized versions of our JavaScript, CSS, and assets. These files are directly generated when you build your React application for deployment.</p>
      <p className='disco'><b className='bold'>node_modules</b>: this folder stores all the third-party dependencies and libraries that our project relies on. It is managed by a package manager like npm, so we have not modified files in this folder directly.</p>
      <p className='disco'><b className='bold'>public</b>: the &quot;public&quot; folder contains static assets that are publicly accessible, such as HTML files, images. Here the main &quot;index.html&quot; file, which serves as the entry point for our React application. </p>
      <p className='disco'><b className='bold'>src</b> the &quot;src&quot; (short for source) folder is where the majority of our project&lsquo; s source code resides. It is the heart of our React application.</p>
      <h2>Inside the src Folder</h2>
      <p className='disco'><b className='bold'>analysis_script</b>: this folder contains scripts and code related to data analysis or processing. These scripts are responsible for analyzing data and generating reports.</p>
      <p className='disco'>The <b className='bold'>App</b> component inside src sets up the routing for our React application using the react-router-dom library. </p>
      <p className='disco'>The <b className='bold'>index.js</b> file is the entry point of every React application and is responsible for rendering the main application component into the DOM.</p>
      <p className='disco'>The <b className='bold'>index.css</b> file is the stylesheet where we defined the layout of our digital edition.</p>
     <p className='disco'>The <b className='bold'>fonts</b> folder is where we downloaded our chosen font-families.</p>
      <p className='disco'>The <b className='bold'>images</b> folder is where we put some reference images used throughout our edition to render it more appealing.</p>
      <p className='disco'>The <b className='bold'>text</b> folder is where we annotated the XML of the Clair De Lune stories, using the TEI standard. For ease of use we annotated each file separately in order to display them using the CETEIcean library for xml conversion. <Link to="/Clair">Read</Link> and discover the emotions in the text.</p>

      
      <h2>Analysis_scripts</h2><p className='disco'> Inside <b className='bold'>analysis_script</b>there is <b className='bold'>parser.py</b> which loads the XML file and stores it into the variable &quot;xml_data.&quot; The script looks for div elements with the attribute &quot;type&quot; set to &quot;story&quot; and stores them in the &quot;story_divs&quot; variable. <b className='bold'>net.gexf</b> has the purpose of creating a network Graph of emotions, then rendered <Link to="/Network">here</Link>. The script initializes a NetworkX graph object called &quot;G.&quot;
It iterates over each &quot;story&quot; div in the XML file.
Within each story, it looks for &quot;interp&quot; elements to extract emotions and other attributes.
For each emotion found, it adds nodes to the graph with attributes such as &quot;div_id,&quot; &quot;type,&quot; and &quot;name&quot; to represent emotions and their relationships.
Depending on whether certain conditions are met (e.g., if &quot;#cause-character&quot; or &quot;#cause-event&quot; is present in the &quot;ana&quot; attribute), specific types of nodes are created and connected to the emotions.
Edges are created between all pairs of emotions within each story.
After processing all stories, the script plots the network graph using matplotlib and saves it as a GEXF file (a format for representing graph data) named &quot;net.gexf.&quot;
In summary, the purpose of the script is to analyze a TEI XML file containing stories and emotions and construct a network graph that represents relationships between emotions within those stories. It distinguishes between different types of emotions and their causes, and it associates story-specific attributes with nodes in the graph. </p>
<h2>Inside the Components&lsquo; folder</h2> 
<p className='disco'>The <b className='bold'>components</b> folder in a web application is a common organizational structure used to group and manage the different pieces of the user interface (UI). It is a best practice in web development to modularize and separate the UI into reusable components, making the codebase more maintainable and easier to understand.  contains a collection of reusable UI components. These components are self-contained, meaning they encapsulate a specific piece of functionality or UI element and can be easily reused throughout the application.</p>
<p></p>
      </div> </div>

      <div id='network-analysis'><div className='textlu'>
      <h2>Network Analysis</h2>
      <p className='disco'>

      After completing the annotation of our short stories, we proceeded with the creation of the sentiments network to continue our analysis.
      Firsly, we had to extract the emotions annotated and use them as data for building our graph.
      <br /><br />
      Lastly, we opted to conduct a few centrality measures to discern clearly in which way the central emotions operated. The final network, measures table and interpretations
      are displayed in the dedicated section of our project. For creating the graph and applying the centrality measures, we used the Python package NetworkX.
      </p>

      </div> </div>

     <div className='cielo1'><div className='code-cont'><div className='code'>
      <GraphCode/>
      </div></div>
      <div id='bibliography'><div className='textlu'>
      <h2>Bibliography</h2>
      <p className='disco' id="bibliography">
      <ul>
    <li>Flanders, Julia, and Fotis Jannidis, editors. The Shape of Data in the Digital Humanities: Modeling Texts and Text-Based Resources. Routledge, Taylor & Francis Group, 2019, pp.120-121. Digital Research in the Arts and Humanities.</li>

    <li>Virginia Francisco, Pablo Gervás, and Federico Peinado. &quot;Ontological reasoning to configure emotional voice synthesis.&quot; Proc. of Web Reasoning and Rule Systems, RR 2007, vol. 4524, LNCS, 2007, pp. 88–102. Springer.</li>

    <li>Parrot, Raquel W. Emotions in Social Psychology. Psychology Press, Philadelphia, 2001.</li>

    <li>Baldoni, Matteo et al. &quot;From Tags to Emotions: Ontology-driven Sentiment Analysis in the Social Semantic Web.&quot; Semantics, Web, and Mining. 1 Jan. 2012, pp. 41-54.</li>

    <li> Poe, Edgar Allan. The Philosophy of Composition, 1846, p.3, retrieved <Link to={'https://pdcrodas.webs.ull.es/fundamentos/PoeThePhilosophyOfComposition.pdf'}> here</Link>.</li>
     </ul>
     </p> </div></div>
     </div>
      </div> </div></div>


      <Footer />
    </>
  );
};

export default Documentation;
