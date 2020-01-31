import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./NavSearch.css";

class NavSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      sortBy: "Date",
      ascending: true
    };
  }

  handleUpdateSearchTerm = term => {
    this.setState({
      searchTerm: term
    });
  };

  handleUpdateSort = sortBy => {
    this.setState({
      sortBy: sortBy
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitSearch(this.state.searchTerm, this.state.sortBy);
    this.props.history.push("/blog/search");
  };

  render() {
    return (
      <div className="NavSearch">
        <form className="NavSearch__form" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="search">Search: </label>
          <input
            id="search"
            name="search"
            value={this.state.searchTerm}
            onChange={e => this.handleUpdateSearchTerm(e.target.value)}
          />
          <label htmlFor="sort">Sort: </label>
          <select
            id="sort"
            name="sort"
            onChange={e => this.handleUpdateSort(e.target.value)}
            value={this.state.sortBy}
          >
            <option value="Date">Date</option>
            <option value="Views">Views</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(NavSearch);
