from bs4 import BeautifulSoup
import os
import networkx as nx
import matplotlib.pyplot as plt
import itertools
# # Read the XML file
# with open('text/bijoux.xml', 'r') as file:
#     xml_data = file.read()

# # Create a Beautiful Soup object with the XML data and the parser
# soup = BeautifulSoup(xml_data, 'xml')

# # Perform operations on the parsed XML data
# # For example, access specific tags or attributes
# title = soup.find('title').text
# print(f"Title: {title}")

# # Extract data from multiple elements
# for item in soup.find_all('item'):
#     name = item.find('name').text
#     value = item.find('value').text
#     print(f"Name: {name}, Value: {value}")

from pathlib import Path

full = os.getcwd()
path= str(Path(full).parents[0]) 
print(path)

# Read the TEI XML file
with open(path+'/text/bijoux.xml', 'r') as file:
    xml_data = file.read()

# # Create a Beautiful Soup object with the XML data and the 'lxml' parser
moonsoup = BeautifulSoup(xml_data, features='xml')

# #gather the stories which are structured inside divs
# divs = moon_soup.find_all('div')

# #make list of the stories
# stories_l = [tag.content for tag in divs]


# print(stories_l[0])
# interp_love = soup.find_all('interp', ana='#love')
# print(interp_love)


# find interp in each paragraph
# make a network
# connect to causes????



# Isolate each paragraph or div
# create a graph for each div id
# associate emotions in the div or the paragraphs
# if the tag contains event -- append with event, same for character

# Find all div elements with type="story"
story_divs = moonsoup.find_all('div', type='story')

# print(story_divs[0])
# # Extract information for each story
# for div in story_divs:
#     story_id = div['xml:id']
#     # title = div.find('head').text
#     paragraphs = div.find_all('p')

#     ana_counts = {}
#     for p in paragraphs:
#         interp_tags = p.find_all('interp')
#         for tag in interp_tags:
#             ana = tag['ana']
#             if ana in ana_counts:
#                 ana_counts[ana] += 1
#             else:
#                 ana_counts[ana] = 1
    
#     print(f"Story ID: {story_id}")
#     # print(f"Title: {title}")
#     print(f"Interp Tag Counts: {ana_counts}")
#     print()

G=nx.Graph()
# for div in story_divs:
#     paragraphs = div.find_all('p')

# # Extract emotions and add edges to the graph
# emotions = set()
# for p in paragraphs:
#     interp_tags = p.find_all('interp')
#     for tag in interp_tags:
#         ana = tag['ana']
#         emotions.add(ana)

# # Add edges between all emotions
# emotion_pairs = list(itertools.combinations(emotions, 2))
# G.add_edges_from(emotion_pairs)

# # Draw the network graph
# pos = nx.spring_layout(G)
# nx.draw(G, pos, with_labels=True, node_color='lightblue', edge_color='gray')
# plt.show()
# nx.write_gexf(G,"n1.gexf")



# import networkx as nx
# import matplotlib.pyplot as plt
# from bs4 import BeautifulSoup
# import itertools

# # Parse the XML file
# soup = BeautifulSoup(xml_data, "lxml")

# # Find all the div elements with type="story"
# stories = soup.find_all("div", {"type": "story"})

# Iterate over each story and create a network
for story in story_divs:
    interps = story.find_all("interp")

    emotions = set()
    for interp in interps:
        ana = interp.get("ana")
        emotions.add(ana.split()[0].lstrip("#"))  # Extract the first part of ana

        # Check if ana contains #cause-character
        if "#cause-character" in ana:
            G.add_node("cause-character")
            G.add_edge(ana.split()[0].lstrip("#"), "cause-character")

        # Check if ana contains #cause-event
        if "#cause-event" in ana:
            G.add_node("cause-event")
            G.add_edge(ana.split()[0].lstrip("#"), "cause-event")
        
        else:
            G.add_node("cause-internal")
            G.add_edge(ana.split()[0].lstrip("#"), "cause-internal")


    # Add nodes for each emotion
    for emotion in emotions:
        G.add_node(emotion)

    # Add edges between all emotions
    emotion_pairs = list(itertools.combinations(emotions, 2))
    G.add_edges_from(emotion_pairs)

# Plot the network
nx.draw(G, with_labels=True)
plt.title("Emotion Network - All Stories")
plt.show()

nx.write_gexf(G, "net.gexf")