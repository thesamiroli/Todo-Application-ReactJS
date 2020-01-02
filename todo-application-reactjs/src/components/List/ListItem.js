import React, { Component } from "react";
import "../../styles/List/ListItem.css";

export class ListItem extends Component {
  render() {
    let status = this.props.checked ? "list-item checked" : "list-item";    
    return (
      <div
        className={status}
        onClick={this.props.onItemClicked}
      >
        {this.props.itemTitle}
      </div>
    );
  }
}

export default ListItem;
