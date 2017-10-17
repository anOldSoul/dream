require('normalize.css/normalize.css');
require('styles/App.css');
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import App from './Game';
import Wufang from './wufang';

import React from 'react';
class Top extends React.Component {
  constructor() {
    super();
  }

  handleName() {
    location.replace("/wufang");
  }

  handleBoard() {
    location.replace("/board");
  }

  render() {
    return (
      <div>
        <Route path="/board" component={App}/>
        <Route path="/wufang" component={Wufang}/>
        <div onClick={() => this.handleName()}>wufang</div>
        <div onClick={() => this.handleBoard()}>board</div>
      </div>
    );
  }
}
export default Top;