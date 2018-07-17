import React, { Component } from 'react'
import mobile from 'is-mobile'

import Frog from './Components/Frog'
import Fly from './Components/Fly'
import Background from './Components/Background'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { mouseX: 0, mouseY: 0 }
    this.fly = React.createRef()
    this.scrollable = React.createRef()
  }
  getMousePosition = (event) => {
    if(!mobile()) {
      this.setState({
        mouseX: event.clientX,
        mouseY: event.clientY,
      })
    }
  }
  getFlyCoords = () => {
    if(mobile()) {
      const rect = this.fly.current.getBoundingClientRect()
      this.setState({
        mouseX: rect.left,
        mouseY: rect.top,
      })
    }
  }
  componentDidMount() {
    if(mobile()) {
      this.scrollable.current.scrollTop = window.innerHeight
      this.scrollable.current.scrollLeft = window.innerWidth
    }
  }
  render() {
    return (
      <div className="App" onMouseMove={this.getMousePosition}>
        {mobile() ? <h1>Scroll to track the fly</h1>: <h1>Move your mouse to track it</h1>}
        <Background />
        <Frog coords={[this.state.mouseX, this.state.mouseY]} />
        {!mobile() ? <Fly style={{left: this.state.mouseX, top: this.state.mouseY}} /> : null }
        {
          mobile() ? (
            <div onScroll={this.getFlyCoords} ref={this.scrollable} className="Scrollable">
              <div className="Inner-scroll">
                <Fly refProp={this.fly} />
              </div>
              
            </div>
          ) : null
        }
        </div>
    );
  }
}

export default App;
