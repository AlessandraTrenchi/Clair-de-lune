import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ sections, onSectionClick }) => {
  const [activeSection, setActiveSection] = useState('');

  const handleSectionClick = (section) => {
    setActiveSection(section.id);
    onSectionClick(section.id);
  };

  return (
    <nav>
      {/* Sidebar content */}
      <div className="sidebar-top">
        {/* Sidebar header */}
      </div>
      <div className="sidebar-links">
        <ul className="section-list">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                className={activeSection === section.id ? 'active' : ''}
                onClick={() => handleSectionClick(section)}
              >
                <span className="section-id">{section.id}</span>
                
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

Sidebar.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSectionClick: PropTypes.func.isRequired,
};

export default Sidebar;
