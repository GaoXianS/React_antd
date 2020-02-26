import React from 'react';
import Main from './page/Main/Main'
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom';

const App = () => (
  <Router className="container">
    <Switch>
      <Route path="/" component={Main}/>
    </Switch>
  </Router>
);

export default App;