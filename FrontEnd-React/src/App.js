import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import estudantes from './views/estudantes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={estudantes} />
        <Route path="/home" component={Home} />
      </Routes>
    </Router>

  );
}

export default App;
