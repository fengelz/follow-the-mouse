import React, { Component } from 'react'
import './Fly.css'

class Body extends Component {
  render() {
    return (
        <div style={this.props.style || null} className="Fly" ref={this.props.refProp} />
    )
  }
}

export default Body;