import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Home from './views/Home';
import estudantes from './views/estudantes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route exact path="/" component={estudantes} />
        <Route path="/home" component={Home} />
      </Router>
    </BrowserRouter>

  );
}

export default App;
