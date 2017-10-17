import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
// import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';

// Render the main component into the dom
ReactDOM.render((
  <Router>
      <Route path='/' component={Home}/>
  </Router>
), document.getElementById('app'));
