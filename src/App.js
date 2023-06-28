import React from 'react'; //example of routing system
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
};
//each route is associated with a specific component, when the corresponding URL is accessed, the associated component is rendered.

export default App;
