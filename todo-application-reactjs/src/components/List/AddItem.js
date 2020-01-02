import React, { Component } from "react";
import "../../styles/List/AddItem.css";

export class AddItem extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            className="add-item"
            placeholder="Add notes..."
            value={this.props.value}
            onChange={this.props.onChange}
            onKeyDown={this.props.onEnter}
          ></input>
        </form>
      </div>
    );
  }
}

export default AddItem;
