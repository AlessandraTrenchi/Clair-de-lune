import React from 'react';
import Footer from './Footer';
import Centralities from './Centralities';
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

      <div className="textlu">
      <h2>Network</h2>

      <p className="disco">

      Graph is a means of visualization that enables a holistic view of sentiment connections within and across short stories.
      By constructing a network of sentiments as nodes, and their relationships with directed edges, representing the flow and patterns of emotions
      that emerge throughout Guy de Maupassant&apos;s collection. This broader perspective can allow us
      to identify recurrent emotional motifs and discern common themes that could remain elusive through traditional reading methods;
      indeed, in our network we intuitively notice....<br /><br />

</p>

</div>
<Centralities />

<div className="textlu">
<h2>Further development</h2>

<p className="disco">
Furthermore, an alternative approach to reading implementing network theory can provide possibilities for a comparative study.
With sentiment networks, one can observe and compare the use of emotional states between various authors and genres;
it would be interesting, for example, to investigate if and how the historical context of a text or the personal life of the author can shape
the way they use emotions in the narrative, or how relationship between emotional states can behave in different literary genres (e.g. psychological,
  comedy, horror, etc).
As Moretti advocates for comparing and contrasting literary data on a larger scale,
you can use graph visualization to explore similarities and differences in emotional themes, character interactions,
and narrative structures among various short stories. This comparative approach adds depth to your analysis and contributes
 to a broader understanding of the emotional dimensions present in the short story genre.</p>
 </div>

        <Footer />
      </div>
      </div>
  );
};

export default Network;
