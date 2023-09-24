import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ images, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Add this state


  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleImageClick = (xmlId) => {
    onImageClick(xmlId);
  };

  return (
    <div className="carousel">
      <button onClick={handlePrevClick}>Previous</button>
      <div className="image-container">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          onClick={() => handleImageClick(images[currentIndex].xmlId)}
        />
        <h3>{images[currentIndex].title}</h3>
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      xmlId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default Carousel;
