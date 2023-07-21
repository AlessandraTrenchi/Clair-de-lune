import React from 'react';
import Footer from './Footer';

const Network = () => {
  return (
    <div>
      <div className='nett'>
        <div className='tit'>
          <h2>Network of Emotions</h2>
        </div>
        <iframe
          width="800"
          height="600"
          src="https://ouestware.gitlab.io/retina/1.0.0-beta.1/#/embed/?url=https%3A%2F%2Fgist.githubusercontent.com%2Fchloeppd%2Fda85a845be35f7f8a69557542b244fe6%2Fraw%2F65774543a6fd55e00e4f782c4b9430efc704d706%2Fdir_senti.gexf&sa=r&ca=d&st[]=r&st[]=t&st[]=t_&nr=0.701&lt=9.488"
          frameBorder="0"
          title="Retina"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Network;
