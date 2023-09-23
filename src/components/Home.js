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
          <div className='journal'>
            <div className='mom'>
              <h2>Guy de Maupassant</h2>
              <div className='para'>
                Guy de Maupassant (1850-1893) was a renowned French writer known for his influential works in the field of short stories.
                Born on August 5, 1850, in Tourville-sur-Arques, France, Maupassant displayed exceptional literary talent from a young age.
                He became a protégé of Gustave Flaubert and developed a keen observational style in his writings.
              </div>

            </div>
            <div className='mom'>
              <h2>Clair de Lune</h2>
              <div className='para'>
              &quot;Clair de Lune et autres nouvelles&quot; is a collection of short stories by Guy de Maupassant, first published in 1883.
                His stories often explore the darker aspects of human nature, delving into themes of morality, psychology, and social satire.
                They are characterized by their concise prose, vivid descriptions, and precise narrative techniques, and Maupassant&apos;s writing style greatly influenced the development of the modern short story genre.

              </div>
            </div>
          </div>
        </div>
      </span>
      <Footer />
    </>
  );
};

export default Home;
