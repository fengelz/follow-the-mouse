import React, { Component } from 'react';

import Body from './Body'
import Eye from './Eye'
import './Frog.css';

class Frog extends Component {
  render() {
    return (
      <div className="Frog">
        <Body />
        <Eye coords={this.props.coords} />
        <Eye coords={this.props.coords} />
      </div>
    );
  }
}

export default Frog;