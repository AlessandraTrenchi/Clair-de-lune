import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import React, { Component } from 'react';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';


class GraphCode extends Component {
  render() {
    const gCode = `

    from bs4 import BeautifulSoup
    import os
    import networkx as nx
    import matplotlib.pyplot as plt
    import itertools
    import json
    from pathlib import Path
    from collections import defaultdict


    full = os.getcwd()
    path = str(Path(full).parents[0])
    print(path)

    #create beautiful soup object for data retrieval
    with open(path + '/text/bijoux.xml', 'r') as file:
        xml_data = file.read()
    moonsoup = BeautifulSoup(xml_data, features='xml')

    #find each story
    story_divs = moonsoup.find_all('div', type='story')
    emo_count=defaultdict(int)

    G = nx.DiGraph()  #initiate a directed graph

    #create network out of each story where nodes of sentiments are linked together
    for story in story_divs:
        div_id = story.get("xml:id")

        interps = story.find_all("interp")

        emotions = []  #store emotions in a list in the order of appearance
        for interp in interps:
            ana = interp.get("ana")
            emotion = ana.split()[0].lstrip("#")
            emotions.append(emotion)
            emo_count[emotion] += 1

            #check if ana contains #cause-character
            if "#cause-character" in ana:
                G.add_node("cause-character", bipartite=1, div_id=div_id, type="emotion-cause")  # Add node attributes
                G.add_edge(emotion, "cause-character")

            #check if ana contains #cause-event
            if "#cause-event" in ana:
                G.add_node("cause-event", bipartite=1, div_id=div_id, type="emotion-cause")
                G.add_edge(emotion, "cause-event")

            else:
                G.add_node("cause-internal", bipartite=1, div_id=div_id, type="emotion-cause")
                G.add_edge(emotion, "cause-internal")

        #add emotions
        for emotion in emotions:
            G.add_node(emotion, bipartite=0, div_id=div_id, type="emotion", name=emotion)

        #add edges between emotions based on their order of appearance
        for i in range(len(emotions) - 1):
            G.add_edge(emotions[i], emotions[i+1])

    nx.draw(G, with_labels=True, arrows=True)
    plt.title("Emotion Network - All Stories")
    # plt.show()

    print(emo_count)
    nx.write_gexf(G, "DIRnet.gexf")



    # convert the graph to  JSON format
    graph_data = {"nodes": [], "edges": []}

    for node in G.nodes:
        graph_data["nodes"].append({"id": node, "label": node})

    for edge in G.edges:
        graph_data["edges"].append({"from": edge[0], "to": edge[1], "id": str(len(graph_data["edges"]))})

    with open("graph_data.json", "w") as file:
        json.dump(graph_data, file)


    import pandas as pd


    def create_centrality_df(G, centrality_measure):
        #filter nodes with type "emotion"
        emotion_nodes = [node for node, attr in G.nodes(data=True) if attr.get("type") == "emotion"]
        centrality = centrality_measure(G)
        #list of dictionaries to store the results
        data = [{"Emotion": node, centrality_measure.__name__.capitalize(): value} for node, value in centrality.items() if node in emotion_nodes]
        # create df from the lists
        df_centrality = pd.DataFrame(data)

        df_centrality = df_centrality.sort_values(by=centrality_measure.__name__.capitalize(), ascending=False, ignore_index=True)
        return df_centrality

    # in-degree
    df_in_degree = create_centrality_df(G, nx.in_degree_centrality)
    df_in_degree.to_csv('df_in_degree.csv')
    print(df_in_degree)

    #out-degree
    df_out_degree = create_centrality_df(G, nx.out_degree_centrality)
    df_out_degree.to_csv('df_out_degree.csv')
    print(df_out_degree)

    #betweenness centrality
    df_betweenness = create_centrality_df(G, nx.betweenness_centrality)
    df_betweenness.to_csv('df_betweenness.csv')
    print(df_betweenness)

    #closeness
    df_closeness = create_centrality_df(G, nx.closeness_centrality)
    df_closeness.to_csv('df_closeness.csv')
    print(df_closeness)

  `;


  return (


         <SyntaxHighlighter language="python" style={nightOwl} >
           {gCode}
         </SyntaxHighlighter>

     );
   }
 }

 export default GraphCode;
