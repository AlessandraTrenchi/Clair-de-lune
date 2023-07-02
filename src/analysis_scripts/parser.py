from bs4 import BeautifulSoup
import os
import networkx as nx
import matplotlib.pyplot as plt
import itertools


from pathlib import Path

full = os.getcwd()
path= str(Path(full).parents[0]) 
print(path)

# Read the TEI XML file
with open(path+'/text/bijoux.xml', 'r') as file:
    xml_data = file.read()

# # Create a Beautiful Soup object with the XML data and the 'lxml' parser
moonsoup = BeautifulSoup(xml_data, features='xml')



story_divs = moonsoup.find_all('div', type='story')



G=nx.Graph()

# # Iterate over each story and create a network
# for story in story_divs:
#     interps = story.find_all("interp")

#     emotions = set()
#     for interp in interps:
#         ana = interp.get("ana")
#         emotions.add(ana.split()[0].lstrip("#"))  # Extract the first part of ana

#         # Check if ana contains #cause-character
#         if "#cause-character" in ana:
#             G.add_node("cause-character")
#             G.add_edge(ana.split()[0].lstrip("#"), "cause-character")

#         # Check if ana contains #cause-event
#         if "#cause-event" in ana:
#             G.add_node("cause-event")
#             G.add_edge(ana.split()[0].lstrip("#"), "cause-event")
        
#         else:
#             G.add_node("cause-internal")
#             G.add_edge(ana.split()[0].lstrip("#"), "cause-internal")


#     # Add nodes for each emotion
#     for emotion in emotions:
#         G.add_node(emotion)

#     # Add edges between all emotions
#     emotion_pairs = list(itertools.combinations(emotions, 2))
#     G.add_edges_from(emotion_pairs)



# Iterate over each story and create a network
for story in story_divs:
    div_id = story.get("xml:id")  # Get the div ID

    interps = story.find_all("interp")

    emotions = set()
    for interp in interps:
        ana = interp.get("ana")
        emotions.add(ana.split()[0].lstrip("#"))  # Extract the first part of ana

        # Check if ana contains #cause-character
        if "#cause-character" in ana:
            G.add_node("cause-character", div_id=div_id, type="emotion-cause")  # Add div_id as a node attribute
            G.add_edge(ana.split()[0].lstrip("#"), "cause-character")

        # Check if ana contains #cause-event
        if "#cause-event" in ana:
            G.add_node("cause-event", div_id=div_id, type="emotion-cause")  # Add div_id as a node attribute
            G.add_edge(ana.split()[0].lstrip("#"), "cause-event")
        
        else:
            G.add_node("cause-internal", div_id=div_id, type="emotion-cause")  # Add div_id as a node attribute
            G.add_edge(ana.split()[0].lstrip("#"), "cause-internal")

    # Add nodes for each emotion
    for emotion in emotions:
        G.add_node(emotion, div_id=div_id, type="emotion", name=emotion)  # Add div_id as a node attribute

    # Add edges between all emotions
    emotion_pairs = list(itertools.combinations(emotions, 2))
    G.add_edges_from(emotion_pairs)

# Plot the network
nx.draw(G, with_labels=True)
plt.title("Emotion Network - All Stories")
plt.show()

nx.write_gexf(G, "net.gexf")


# from collections import Counter

# # ...

# # Create a dictionary to store edge weights
# edge_weights = Counter()

# # Iterate over each story and create a network
# for story in story_divs:
#     div_id = story.get("xml:id")  # Get the div ID

#     interps = story.find_all("interp")

#     emotions = set()
#     for interp in interps:
#         ana = interp.get("ana")
#         emotions.add(ana.split()[0].lstrip("#"))  # Extract the first part of ana

#         # Check if ana contains #cause-character
#         if "#cause-character" in ana:
#             if div_id is not None:
#                 G.add_node("cause-character", div_id=div_id, type="emotion-cause")  # Add div_id as a node attribute
#             G.add_edge(ana.split()[0].lstrip("#"), "cause-character")
#             edge_weights[(ana.split()[0].lstrip("#"), "cause-character")] += 1  # Increment edge weight

#         # Check if ana contains #cause-event
#         if "#cause-event" in ana:
#             if div_id is not None:
#                 G.add_node("cause-event", div_id=div_id, type="emotion-cause")  # Add div_id as a node attribute
#             G.add_edge(ana.split()[0].lstrip("#"), "cause-event")
#             edge_weights[(ana.split()[0].lstrip("#"), "cause-event")] += 1  # Increment edge weight

#         else:
#             if div_id is not None:
#                 G.add_node("cause-internal", div_id=div_id, type="emotion-cause")  # Add div_id as a node attribute
#             G.add_edge(ana.split()[0].lstrip("#"), "cause-internal")
#             edge_weights[(ana.split()[0].lstrip("#"), "cause-internal")] += 1  # Increment edge weight

#     # Add nodes for each emotion
#     for emotion in emotions:
#         if div_id is not None:
#             G.add_node(emotion, div_id=div_id, type="emotion")  # Add div_id as a node attribute

# # Update edge weights in the graph
# for edge, weight in edge_weights.items():
#     G[edge[0]][edge[1]]['weight'] = weight

# Plot the network
# nx.draw(G, with_labels=True)
# plt.title("Emotion Network - All Stories")
# plt.show()

# nx.write_gexf(G, "net.gexf")

