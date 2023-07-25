import React from 'react';

const Centralities = () => {
  return (

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
distance to all other sentiment pairs.<br /><br />
      <table>
      <thead>
        <tr>
          <th>Emotion</th>
          <th>In-Degree</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>joy</td>
          <td>0.215149</td>
        </tr>
        <tr>
          <td>fear</td>
          <td>0.514286</td>
        </tr>
        <tr>
          <td>surprise</td>
          <td>0.514286</td>
        </tr>
        <tr>
          <td>anger</td>
          <td>0.485714</td>
        </tr>
        <tr>
          <td>sadness</td>
          <td>0.342857</td>
        </tr>
        <tr>
          <td>love</td>
          <td>0.342857</td>
        </tr>
        <tr>
          <td>anticipation</td>
          <td>0.314286</td>
        </tr>
        <tr>
          <td>amazement</td>
          <td>0.314286</td>
        </tr>
        <tr>
          <td>contempt</td>
          <td>0.285714</td>
        </tr>
        <tr>
          <td>remorse</td>
          <td>0.200000</td>
        </tr>
      </tbody>
      </table>

      <table>
<thead>
  <tr>
    <th>Emotion</th>
    <th>Out-Degree</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>fear</td>
    <td>0.571429</td>
  </tr>
  <tr>
    <td>surprise</td>
    <td>0.514286</td>
  </tr>
  <tr>
    <td>anger</td>
    <td>0.485714</td>
  </tr>
  <tr>
    <td>love</td>
    <td>0.428571</td>
  </tr>
  <tr>
    <td>sadness</td>
    <td>0.428571</td>
  </tr>
  <tr>
    <td>joy</td>
    <td>0.400000</td>
  </tr>
  <tr>
    <td>amazement</td>
    <td>0.400000</td>
  </tr>
  <tr>
    <td>anticipation</td>
    <td>0.342857</td>
  </tr>
  <tr>
    <td>despair</td>
    <td>0.285714</td>
  </tr>
  <tr>
    <td>remorse</td>
    <td>0.285714</td>
  </tr>
</tbody>
</table>

      <table>
        <thead>
          <tr>
            <th>Emotion</th>
            <th>Betweenness</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>fear</td>
            <td>0.215149</td>
          </tr>
          <tr>
            <td>surprise</td>
            <td>0.136048</td>
          </tr>
          <tr>
            <td>joy</td>
            <td>0.121393</td>
          </tr>
          <tr>
            <td>anger</td>
            <td>0.086234</td>
          </tr>
          <tr>
            <td>love</td>
            <td>0.066726</td>
          </tr>
          <tr>
            <td>amazement</td>
            <td>0.065281</td>
          </tr>
          <tr>
            <td>anticipation</td>
            <td>0.057412</td>
          </tr>
          <tr>
            <td>sadness</td>
            <td>0.045336</td>
          </tr>
          <tr>
            <td>despair</td>
            <td>0.042037</td>
          </tr>
          <tr>
            <td>trust</td>
            <td>0.029848</td>
          </tr>


        </tbody>
      </table>

      <table>
      <thead>
        <tr>
          <th>Emotion</th>
          <th>Closeness</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>joy</td>
          <td>0.610159</td>
        </tr>
        <tr>
          <td>surprise</td>
          <td>0.596894</td>
        </tr>
        <tr>
          <td>fear</td>
          <td>0.584195</td>
        </tr>
        <tr>
          <td>sadness</td>
          <td>0.528022</td>
        </tr>
        <tr>
          <td>love</td>
          <td>0.518059</td>
        </tr>
        <tr>
          <td>anticipation</td>
          <td>0.508466</td>
        </tr>
        <tr>
          <td>amazement</td>
          <td>0.508466</td>
        </tr>
        <tr>
          <td>anger</td>
          <td>0.499221</td>
        </tr>
        <tr>
          <td>remorse</td>
          <td>0.450117</td>
        </tr>
        <tr>
          <td>serenity</td>
          <td>0.442857</td>
        </tr>
      </tbody>
      </table>
</p>
</div>


  );
};

export default Centralities;
