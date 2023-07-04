import React from 'react';
import Graph from 'react-graph-vis';
import Footer from './Footer';

const Network = () => {
  const graph = {
    nodes: [
      { id: 'cause-internal', label: 'cause-internal' },
      { id: 'love', label: 'love' },
      { id: 'anticipation', label: 'anticipation' },
      { id: 'joy', label: 'joy' },
      { id: 'anger', label: 'anger' },
      { id: 'cause-character', label: 'cause-character' },
      { id: 'surprise', label: 'surprise' },
      { id: 'cause-event', label: 'cause-event' },
      { id: 'sadness', label: 'sadness' },
      { id: 'grief', label: 'grief' },
      { id: 'disgust', label: 'disgust' },
      { id: 'awe', label: 'awe' },
      { id: 'envy', label: 'envy' },
      { id: 'acceptance', label: 'acceptance' },
      { id: 'contempt', label: 'contempt' },
      { id: 'admiration', label: 'admiration' },
      { id: 'fear', label: 'fear' },
      { id: 'distraction', label: 'distraction' },
      { id: 'shame', label: 'shame' },
      { id: 'remorse', label: 'remorse' },
      { id: 'terror', label: 'terror' },
      { id: 'rage', label: 'rage' },
      { id: 'ecstasy', label: 'ecstasy' },
      { id: 'despair', label: 'despair' },
      { id: 'amazement', label: 'amazement' },
      { id: 'apprehension', label: 'apprehension' },
      { id: 'hope', label: 'hope' },
      { id: 'pride', label: 'pride' },
      { id: 'serenity', label: 'serenity' },
      { id: 'annoyance', label: 'annoyance' },
      { id: 'trust', label: 'trust' },
      { id: 'vigilance', label: 'vigilance' },
      { id: 'added-node', label: 'added-node' }, // Nodo aggiunto
    ],
    edges: [
      { from: 'cause-internal', to: 'love', id: '0' },
      { from: 'cause-internal', to: 'anticipation', id: '1' },
      { from: 'cause-internal', to: 'joy', id: '2' },
      { from: 'cause-internal', to: 'anger', id: '3' },
      { from: 'cause-internal', to: 'surprise', id: '4' },
      { from: 'cause-internal', to: 'grief', id: '5' },
      { from: 'cause-internal', to: 'sadness', id: '6' },
      { from: 'cause-internal', to: 'disgust', id: '7' },
      { from: 'cause-internal', to: 'awe', id: '8' },
      { from: 'cause-internal', to: 'envy', id: '9' },
      { from: 'cause-internal', to: 'acceptance', id: '10' },
      { from: 'cause-internal', to: 'cause-character', id: '11' },
      { from: 'cause-internal', to: 'cause-event', id: '12' },
      { from: 'cause-internal', to: 'contempt', id: '13' },
      { from: 'cause-internal', to: 'admiration', id: '14' },
      { from: 'cause-internal', to: 'fear', id: '15' },
      { from: 'cause-internal', to: 'distraction', id: '16' },
      { from: 'cause-internal', to: 'shame', id: '17' },
      { from: 'cause-internal', to: 'remorse', id: '18' },
      { from: 'cause-internal', to: 'terror', id: '19' },
      { from: 'cause-internal', to: 'rage', id: '20' },
      { from: 'cause-internal', to: 'ecstasy', id: '21' },
      { from: 'cause-internal', to: 'despair', id: '22' },
      { from: 'cause-internal', to: 'amazement', id: '23' },
      { from: 'cause-internal', to: 'apprehension', id: '24' },
      { from: 'cause-internal', to: 'hope', id: '25' },
      { from: 'cause-internal', to: 'pride', id: '26' },
      { from: 'cause-internal', to: 'serenity', id: '27' },
      { from: 'cause-internal', to: 'annoyance', id: '28' },
      { from: 'cause-internal', to: 'trust', id: '29' },
      { from: 'cause-internal', to: 'vigilance', id: '30' },
      { from: 'cause-internal', to: 'added-node', id: '31' }, // Arco aggiunto
    ],
  };

  const options = {
    nodes: {
      shape: 'dot',
      size: 20,
      color: '#BDB9B7',
      font: {
        size: 33,
        color: 'white',
      },
      borderWidth: 2,
    },
    edges: {
      width: 2,
      color: 'white',
    },
    height: '700px',
    width: '1800px',
    physics: {
      forceAtlas2Based: {
        gravitationalConstant: -80, // Increase this value to make nodes more distant
        centralGravity: 0.01,
        springLength: 300, // Increase this value to make nodes more distant
        springConstant: 0.05,
        damping: 0.4,
        avoidOverlap: 0,
      },
      maxVelocity: 50,
      minVelocity: 0.1,
      solver: 'forceAtlas2Based',
      timestep: 0.35,
      stabilization: { iterations: 150 },
    },
  };

  return (
    <div className='nett'>
      <Graph graph={graph} options={options} />
      <div><Footer/></div>
    </div>
   
  );
  };

export default Network;
