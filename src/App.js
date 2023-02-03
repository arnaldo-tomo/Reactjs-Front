import logo from './logo.svg';
import React from 'react';
import { browserRouter as Router, Switch, Route } from 'react-router-dom';


import student from './pages/student';
import Addstudent from './pages/Addstudent';

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" Component={student} />
        <Route exact path="addstudent " Component={Addstudent} />
      </Switch>
    </Router>

  );
}

export default App;
