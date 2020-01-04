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
            placeholder="Enter your search item..."
            value={this.props.searchTerm}
          ></input>
      </div>
    );
  }
}

export default Search;
