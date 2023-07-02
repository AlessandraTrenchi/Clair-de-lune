import React from 'react';
import Footer from './Footer';
import '../index.css';
import Fluid from './Fluid';

const Home = () => {
  return (
    <>
     <span className='fino'>
     <div className="container1"> 
     <Fluid/>
     <span className='mom'>
      <h2>Guy de Maupassant</h2>
      <p className='para'>
        Guy de Maupassant (1850-1893) was a renowned French writer known for his influential works in the field of short stories.
        Born on August 5, 1850, in Tourville-sur-Arques, France, Maupassant displayed exceptional literary talent from a young age.
        He became a protégé of Gustave Flaubert and developed a keen observational style in his writings.
      </p>
      <p className='para'>
        Maupassant&apos;s stories often explored the darker aspects of human nature, delving into themes of morality, psychology, and social satire.
        His works are characterized by their concise prose, vivid descriptions, and precise narrative techniques.
        Maupassant&apos;s writing style greatly influenced the development of the modern short story genre.
      </p></span>
      <span className='mom'><h2>Claire de Lune</h2>
      <p className='para'>
      &quot;Claire de Lune&quot; is one of Maupassant&apos;s notable works, first published in 1882.
        The story follows the journey of a young woman named Claire, who is trapped in a loveless marriage.
        Seeking solace and a sense of freedom, Claire finds herself drawn to the moonlit nights and the tranquility they offer.
        Through the vivid descriptions of nature and the inner thoughts of the protagonist, Maupassant explores themes of longing, escape, and the limitations imposed by society.
        &quot;Claire de Lune&quot; is regarded as a poignant and evocative tale that showcases Maupassant&apos;s mastery of storytelling.
      </p></span>
      </div>
    </span>
      <Footer/>
    </>
  );
};

export default Home;
