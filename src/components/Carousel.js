import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ images, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={`carousel ${className}`}>
      <button onClick={prevSlide}>Previous</button>
      {images.length > 0 && (
        <img src={images[currentIndex].src} alt="carousel" />
      )}
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      xmlId: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default Carousel;
