import React, { Component } from "react";
import "../../styles/List/AddItem.css";

export class AddItem extends Component {
  render() {
    return (
      <div className="add-wrapper">
          <input
            type="text"
            className="add-item"
            placeholder="Add notes..."
            value={this.props.value}
            onChange={this.props.onChange}
            onKeyDown={this.props.onEnter}
          ></input>
          <i className="fas fa-plus-circle add-icon" onClick={this.props.onIconClick}></i>
      </div>
    );
  }
}

export default AddItem;
