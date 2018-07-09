import React, { Component } from 'react';

import Cloud from './Cloud'
import './Background.css';

class Background extends Component {
  render() {
    return (
      <div className="Background">
        <Cloud />
        <Cloud />
        <Cloud />
      </div>
    );
  }
}

export default Background;