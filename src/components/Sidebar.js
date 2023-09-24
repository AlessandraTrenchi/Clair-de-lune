import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Create this CSS file for styling

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, label: 'Joy', emotype: 'positive', checked: false },
        { id: 2, label: 'Trust', emotype: 'positive', checked: false },
        { id: 10, label: 'Love', emotype: 'positive', checked: false },
        { id: 3, label: 'Anticipation', emotype: 'neutral', checked: false },
        { id: 4, label: 'Surprise', emotype: 'neutral', checked: false },
        { id: 5, label: 'Awe', emotype: 'neutral', checked: false },
        { id: 6, label: 'Fear', emotype: 'negative', checked: false },
        { id: 7, label: 'Anger', emotype: 'negative', checked: false },
        { id: 8, label: 'Disgust', emotype: 'negative', checked: false },
        { id: 9, label: 'Shame', emotype: 'negative', checked: false },
      ],
    };
  }

  handleCheckboxChange = (itemId) => {
    this.setState((prevState) => ({
      items: prevState.items.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      ),
    }));
  };

  render() {
    return (
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
                onChange={() => this.handleCheckboxChange(item.id)}
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
                  onChange={() => this.handleCheckboxChange(item.id)}
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
                onChange={() => this.handleCheckboxChange(item.id)}
              />
              <label htmlFor={`checkbox-${item.id}`}>{item.label}</label>
            </div>
          ))}
      </div>
    );
  }
}

export default Sidebar;
