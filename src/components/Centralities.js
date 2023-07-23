import React from 'react';

const Centralities = () => {
  return (
    <div>
      <h2>Centrality results</h2>
      <p className="disco">

      <table>
      <thead>
        <tr>
          <th>Emotion</th>
          <th>In degree centrality</th>
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
      </p>

      <p className="disco">
      <table>
        <thead>
          <tr>
            <th>Emotion</th>
            <th>Betweenness centrality</th>
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
        </tbody>
      </table>
      </p>

    </div>
  );
};

export default Centralities;
