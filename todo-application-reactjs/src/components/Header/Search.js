import React, { Component } from "react";
import "../../styles/Header/Search.css";

class Search extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={this.props.onChange}
            className="search-input"
            placeholder="Enter your search Item"
            value={this.props.searchTerm}
          ></input>
        </form>
      </div>
    );
  }
}

export default Search;
