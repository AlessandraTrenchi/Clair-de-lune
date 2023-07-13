import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ images, onImageChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    onImageChange(images[newIndex].name);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    onImageChange(images[newIndex].name);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Previous</button>
      <img src={images[currentIndex].src} alt="carousel" />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      xmlId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageChange: PropTypes.func.isRequired,
};

export default Carousel;
