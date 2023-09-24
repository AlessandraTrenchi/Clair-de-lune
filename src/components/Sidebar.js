import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Create this CSS file for styling
import PropTypes from 'prop-types';


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, label: 'Joy', emotype: 'positive', checked: false, anaValue: 'joy' },
        { id: 2, label: 'Trust', emotype: 'positive', checked: false, anaValue: 'trust' },
        { id: 3, label: 'Hope', emotype: 'positive', checked: false, anaValue: 'hope' },
        { id: 4, label: 'Love', emotype: 'positive', checked: false, anaValue: 'love' },
        { id: 5, label: 'Ecstasy', emotype: 'positive', checked: false, anaValue: 'ecstasy' },
        { id: 6, label: 'Anticipation', emotype: 'neutral', checked: false, anaValue: 'anticipation' },
        { id: 7, label: 'Surprise', emotype: 'neutral', checked: false, anaValue: 'surprise' },
        { id: 8, label: 'Amazement', emotype: 'neutral', checked: false, anaValue: 'amazement' },
        { id: 9, label: 'Fear', emotype: 'negative', checked: false, anaValue: 'fear' },
        { id: 10, label: 'Anger', emotype: 'negative', checked: false, anaValue: 'anger' },
        { id: 11, label: 'Sadness', emotype: 'negative', checked: false, anaValue: 'sadness' },
        { id: 12, label: 'Grief', emotype: 'negative', checked: false, anaValue: 'grief' },
        { id: 13, label: 'Disgust', emotype: 'negative', checked: false, anaValue: 'disgust' },
        { id: 14, label: 'Shame', emotype: 'negative', checked: false, anaValue: 'shame' },
      ],
    };
  }
  handleCheckboxChange = (anaValue) => {
    console.log(`Checkbox with anaValue ${anaValue} clicked`);

    // Create a copy of the items array
    const updatedItems = [...this.state.items];

    // Find the index of the item with the specified anaValue
    const itemIndex = updatedItems.findIndex((item) => item.anaValue === anaValue);

    if (itemIndex !== -1) {
      // Toggle the checked state of the item
      updatedItems[itemIndex].checked = !updatedItems[itemIndex].checked;

      // Update the state with the modified items array
      this.setState({ items: updatedItems }, () => {
        // Pass the anaValue to the parent component (Clair)
        this.props.onCheckboxChange(anaValue);
      });
    }
  };


  render() {
    return (
      <div className="sidebar-container">
      <div className="sidebar">

        <div className="emotype-heading">Positive</div>
        {this.state.items
          .filter((item) => item.emotype === 'positive')
          .map((item) => (
            <div key={item.id} className={`sidebar-item positive`}>
              <input
                type="checkbox"
                id={`checkbox-${item.id}`}
                checked={item.checked}
                onChange={() => this.handleCheckboxChange(item.anaValue)}
                className= "hide-checkbox"

              />
              <label htmlFor={`checkbox-${item.id}`}>{item.label}</label>
            </div>
          ))}
          <div className="emotype-heading">Neutral</div>
          {this.state.items
            .filter((item) => item.emotype === 'neutral')
            .map((item) => (
              <div key={item.id} className={`sidebar-item neutral`}>
                <input
                  type="checkbox"
                  id={`checkbox-${item.id}`}
                  checked={item.checked}
                  onChange={() => this.handleCheckboxChange(item.anaValue)}
                  className= "hide-checkbox"
                />
                <label htmlFor={`checkbox-${item.id}`}>{item.label}</label>
              </div>
            ))}

        <div className="emotype-heading">Negative</div>
        {this.state.items
          .filter((item) => item.emotype === 'negative')
          .map((item) => (
            <div key={item.id} className={`sidebar-item negative`}>
              <input
                type="checkbox"
                id={`checkbox-${item.id}`}
                checked={item.checked}
                onChange={() => this.handleCheckboxChange(item.anaValue)}
                className= "hide-checkbox"

              />
              <label htmlFor={`checkbox-${item.id}`}>{item.label}</label>
            </div>
          ))}
      </div>
      </div>
    );
  }
}

  Sidebar.propTypes = {
    onCheckboxChange: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired, // Add this line for the onReset prop
  };

export default Sidebar;
