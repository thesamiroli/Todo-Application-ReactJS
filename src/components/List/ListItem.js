import React, { Component } from "react";
import "../../styles/List/ListItem.css";

export class ListItem extends Component {
  render() {
    let status = this.props.checked ? "list-item checked" : "list-item";
    let statusIcon = this.props.checked ? (
      <i className="fas fa-check-circle"></i>
    ) : (
        <i className="far fa-circle"></i>
    );

    return (
      <div className={status} onClick={this.props.onItemClicked}>  
        {this.props.itemTitle}
        <span className="tick">
        {statusIcon}
        </span>
      </div>
    );
  }
}

export default ListItem;
