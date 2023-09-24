import Carousel from './Carousel';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import XmlComponent from './XmlComponent';
import Sidebar from './Sidebar';
import '../index.css';



const Clair = () => {
  const images = [

    {xmlId: 'bijoux', className:'bijoux', title: 'Les Bijoux' },
    {xmlId: 'clair-de-lune', className:'bijoux', title: 'Clair de Lune' },
    {xmlId: 'le-loup', className:'bijoux', title: 'Le Loup' },
    {xmlId: "coup-d-etat", className:'bijoux', title: "Un coup d'etat" },
    {xmlId: "l-enfant", className:'bijoux', title: "L'enfant" },
    {xmlId: "conte-de-noel", className:'bijoux', title: 'Conte de Noel' },
    {xmlId: "reine-hortense", className:'bijoux', title: 'La Reine Hortense' },
    {xmlId: "le-perdon", className:'bijoux', title: 'Le pardon' },
    {xmlId: "legende-mont-st-michel", className:'bijoux', title: 'La Legende du Mont Saint-Michel' },
    {xmlId: "une-veuve", className:'bijoux', title: 'Une veuve' },
    {xmlId: "mlle-cocotte", className:'bijoux', title: 'Mademoiselle Cocotte' },
    {xmlId: "apparition", className:'bijoux', title:'Apparition'}
  ];

    const [currentXmlId, setCurrentXmlId] = useState(null);
    const [currentTextUrl, setCurrentTextUrl] = useState(null);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [selectedAnaValues, setSelectedAnaValues] = useState([]); // Add selectedAnaValues state
    const [clearHighlighting, setClearHighlighting] = useState(false);


    const handleTitleClick = (xmlId) => {
      setCurrentXmlId(xmlId);

      // Determine the corresponding texturl based on the selected xmlId
      const repo = 'https://raw.githubusercontent.com/AlessandraTrenchi/Clair-de-lune/main/src/text/';
      const texturl = repo + xmlId + '.xml';

      setCurrentTextUrl(texturl);
      // Show the sidebar when an item is clicked
      setIsSidebarVisible(true);
    };

    const handleCheckboxChange = (anaValue) => {
      event.preventDefault(); // Prevent the default behavior

      console.log(`Checkbox clicked: ${anaValue}`);

      // Toggle the selectedAnaValues based on checkbox changes
      if (selectedAnaValues.includes(anaValue)) {
        setSelectedAnaValues((prevValues) =>
          prevValues.filter((value) => value !== anaValue)
        );
        console.log(`Unchecked: ${anaValue}`);
      } else {
        setSelectedAnaValues((prevValues) => [...prevValues, anaValue]);
        console.log(`Checked: ${anaValue}`);
      }

      // Log the updated state
    };

    const applyHighlighting = () => {
      if (!currentXmlId || !selectedAnaValues.length) {
        return; // Exit early if no XML or no selectedAnaValues
      }

      selectedAnaValues.forEach((anaValue) => {
        const elementsToHighlight = document.querySelectorAll('tei-interp');

        elementsToHighlight.forEach((element) => {
          // Get the value of the 'ana' attribute
          const elementAnaValue = element.getAttribute('ana');

          // Check if the 'ana' attribute value matches the anaValue
          if (elementAnaValue === `#${anaValue}`) {
            // Add a custom CSS class to apply styles

            element.classList.add(anaValue);
            element.classList.add('highlighted'); // You can define 'highlighted' class in your CSS
          }
        });
      });
    };

    const clearTextHighlighting = () => {
    const elementsToClear = document.querySelectorAll('.tei-interp.highlighted');

    elementsToClear.forEach((element) => {
      element.classList.remove('highlighted');
      // Iterate through selectedAnaValues and remove specific anaValue classes
      selectedAnaValues.forEach((anaValue) => {
        element.classList.remove(anaValue);
      });
    });
  };



    // Call applyHighlighting whenever selectedAnaValues or currentXmlId changes
    useEffect(() => {
      applyHighlighting();

      if (clearHighlighting) {
        clearTextHighlighting();
        setClearHighlighting(false); // Reset the state variable
      }
    }, [selectedAnaValues, currentXmlId, clearHighlighting]);

    return (
      <>
        <div className='nett'>
          <div className='carr'>
            <div className='clair-container'>
              <h1>Clair de Lune Digital Edition</h1>
              <div className='centered-carousel'>
                <Carousel images={images} onTitleClick={handleTitleClick} />
              </div>
            </div>

            <div className="cont-tei">
              <div className='main-content'>
                {isSidebarVisible && (
                  <Sidebar
                selectedAnaValues={selectedAnaValues}
                onCheckboxChange={handleCheckboxChange}
                onReset={() => setClearHighlighting(true)} // Notify Clair to clear text highlighting
              />
                              )}
                {currentXmlId && (
                  <XmlComponent
                    texturl={currentTextUrl}
                    applyHighlighting={applyHighlighting} // Pass the function as a prop
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  };

  export default Clair;
