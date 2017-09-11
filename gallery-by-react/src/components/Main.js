require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


class AppComponent extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}


AppComponent.defaultProps = {
};

export default AppComponent;
