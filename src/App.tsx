import React from 'react';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import quiz from './components/quiz/quiz'

const  App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component = {quiz}/>
        </Switch>
    </Router>
  );
}
export default App;