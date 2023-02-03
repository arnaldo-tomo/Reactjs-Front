import React from 'react';

import Home from './views/Home';
import sobre from './pages/sobre';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Component } from 'react';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>

  );
}

export default App;
