import React, { useState } from 'react';
import '../index.css';

const Fluid = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  return (
    <div className="centered-container">
      <h1
        className={`fluid-text ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
        data-text="Clair de Lune"
      >
        Clair de Lune
      </h1>
    </div>
  );
};

export default Fluid;
