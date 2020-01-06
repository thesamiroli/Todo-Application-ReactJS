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
    let deleteIcon = <i className="fas fa-trash-alt delete-icon"></i>
    return (
      <div className={status} >  
        {this.props.itemTitle}
        <span className="tick" onClick={this.props.onItemClicked}>
        {statusIcon}
        </span>
        <span onClick={this.props.onDeleteIconClicked} className="tick">
        {deleteIcon}
        </span>
      </div>
    );
  }
}

export default ListItem;
