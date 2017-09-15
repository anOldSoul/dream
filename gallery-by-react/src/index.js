import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Game';
import Top from './components/top';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

// Render the main component into the dom
ReactDOM.render((
  <Router>
    <div>     
      <Route path="/ha" component={App}/>
      <Route path="/top" component={Top}/>
    </div>
  </Router>
), document.getElementById('app'));
