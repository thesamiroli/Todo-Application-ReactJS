import React, { Component } from "react";
import "../../styles/Header/Search.css";

class Search extends Component {
  render() {
    return (
      <div className="search-wrapper">
          <input
            type="text"
            onChange={this.props.onChange}
            className="search-input"
            placeholder="Search your todos..."
            value={this.props.searchTerm}
          ></input>
      </div>
    );
  }
}

export default Search;
