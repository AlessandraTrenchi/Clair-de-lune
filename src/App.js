import React from 'react'; //example of routing system
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import AboutPage from './component/AboutPage';
import ContactPage from './component/ContactPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
};
//each route is associated with a specific component, when the corresponding URL is accessed, the associated component is rendered.

export default App;
