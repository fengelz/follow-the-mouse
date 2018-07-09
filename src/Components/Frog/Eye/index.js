import React, { Component } from 'react';
import Compass from 'react-coord-compass';

import './Eye.css';

class Eye extends Component {
  render() {
    return (
      <div className="Eye">
        <Compass coords={this.props.coords}>
          <div>
            <span>
              <span />
            </span>
          </div>
        </Compass>
      </div>
    );
  }
}

export default Eye;