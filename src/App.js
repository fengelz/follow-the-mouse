import React, { Component } from 'react';

import Frog from './Components/Frog'
import Background from './Components/Background'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { mouseX: 0, mouseY: 0 }
  }
  getMousePosition = (event) => {
    this.setState({
      mouseX: event.clientX,
      mouseY: event.clientY,
    })
  }
  render() {
    return (
      <div className="App" onMouseMove={this.getMousePosition}>
        <Background />
        <Frog coords={[this.state.mouseX, this.state.mouseY]} />
      </div>
    );
  }
}

export default App;
