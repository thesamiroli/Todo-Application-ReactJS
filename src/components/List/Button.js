import React, { Component } from "react";
import '../../styles/Button.css'

class Button extends Component {

  render() {
    return (
      <button className={"button " + this.props.buttonColor} onClick={this.props.onClick}>
        {this.props.label || "Button"}
      </button>
    );
  }
}

export default Button;
