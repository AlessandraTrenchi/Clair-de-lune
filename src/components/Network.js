import React from 'react';
import Footer from './Footer';
import Centralities from './Centralities';
const Network = () => {
  return (
    <div>
      <div className='nett'>


      <div className="textlu">
      <h2>Sentiment network</h2>

      <p className="disco">

      Graphs can enable a holistic view of connections within information-full structures, such as annotated textual data.
      We opted for this visualization method, constructing a network of sentiments as nodes, and their relationships with directed edges, in order to
      demonstrate the the flow and patterns of emotions
      that emerge throughout Guy de Maupassant&apos;s collection.
      <br /><br />
      This broader perspective can allow us
      to identify recurrent emotional motifs and discern common themes that could <b>remain elusive through traditional reading methods</b>;
      indeed, in our network we intuitively notice <b>clusters of emotions</b> that are better interconnected, and <b>prominent sentiments </b>
      that keep recurring multiple times in the stories, namely those of joy, fear, anger, and surprise.<br /><br />

</p>


</div>



<iframe
  width="900"
  height="800"
  src="https://ouestware.gitlab.io/retina/1.0.0-beta.1/#/embed/?url=https%3A%2F%2Fgist.githubusercontent.com%2Fchloeppd%2Fda85a845be35f7f8a69557542b244fe6%2Fraw%2F65774543a6fd55e00e4f782c4b9430efc704d706%2Fdir_senti.gexf&sa=r&ca=d&st[]=r&st[]=t&st[]=t_&nr=0.701&lt=9.488"
  frameBorder="0"
  title="Retina"
  allowFullScreen
></iframe>

<div className="textlu">
<h2>Network Analysis</h2>
<p className="disco">

By applying centrality measures, we can also discover emotions that can have more critical roles in character interactions, story events, and the overall tone and atmosphere of the short stories;
 These pivotal sentiments may be associated with key moments of tension, resolution, or emotional climax in the narratives.<br /><br />

In-Degree centrality measures the number of incoming connections to a sentiment, which indicate how often the sentiment appears after other emotions and is influenced by them.
In the context of our network, sentiments with a high in-degree are influential emotions that commonly appear after many other emotions,
therefore having a central role in the emotional flow of the narrative.<br /><br />

Out-Degree centrality, on the other hand, measures the number of outgoing emotional connections from a sentiment,
indicating how frequently the sentiment is expressed and the extent to which it triggers other emotions.<br /><br />


Betweenness Centrality quantifies the extent to which a sentiment acts as an intermediary between other emotions.
Emotions that display a high betweenness centrality indicate they have potential control over the network, by influencing the
relationships between sentiments, and connecting emotions that might not directly interact with each other.<br /><br />

Lastly, Closeness Centrality measures the efficacy of a sentiment&apos;s influence in the network, by using the average shortest
distance to all other sentiment pairs.<br /><br /> </p>
</div>

<Centralities />


<div className="textlu">
<h2>Interpretations</h2>

<p className="disco">

After applying the centrality measures implementing the Python package NetworkX, several prominent emotions emerge;
Fear, joy, surprise, anger, and love hold significant positions in the emotional flow of the stories, contributing to their overall
tone and character interactions.
<br /><br />
Fear stands out as a central and influential emotion, with high in-degree centrality due to its frequent occurence, a high out-degree
centrality, suggesting its ability to trigger other emotions, and acts as a critical &quot;intermediary&quot; holding the highest betweenness centrality.
<br /><br />
Joy, on the other hand, is the sentiment that leads in closeness centrality,
suggesting it has a particular efficiency at influencing other emotions.
</p>
</div>




<div className="textlu">
<h2>Further development</h2>

<p className="disco">
As Franco Moretti advocates for comparing and contrasting literary data on a wider scale,
implementing network theory in a large-scale digital literature project can offer promising possibilities for a comparative study.
<br /><br />
If we can observe and compare the use of emotional states, and furthermore, character interactions and the role of narrative structures among
various authors and genres via sentiment networks, it would be interesting to investigate, for example, <b>if and how the historical context</b>
of a text or the personal life of the author can shape the way they use emotions in the narrative, or how relationship between
story elements can behave in different literary genres (e.g. psychological,
  comedy, horror, etc). This comparative approach can contribute
 to a broader understanding of the emotional dimensions present in the short story genre.</p>
 </div>

        <Footer />
      </div>
      </div>
  );
};

export default Network;
