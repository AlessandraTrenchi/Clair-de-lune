import React from 'react';
import ReactDOM from 'react-dom';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class CarouselWithoutPropTypes extends React.Component {
    // ... (Copy the rest of the code from your original Carousel component)
}

var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
ReactDOM.render(<CarouselWithoutPropTypes items={items} active={0}/>, document.getElementById('app'))

export default CarouselWithoutPropTypes;
