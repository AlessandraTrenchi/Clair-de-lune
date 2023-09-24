import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ images, onTitleClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={handlePrevClick}>Previous</button>
      <div className="image-container">
        <h3 onClick={() => onTitleClick(images[currentIndex].xmlId)}>{images[currentIndex].title}</h3>
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      xmlId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

export default Carousel;
