import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import NavSearch from "./components/NavSearch";
import BlogList from "./components/BlogList/BlogList";
import BlogPage from "./components/BlogPage/BlogPage";
import BlogContext from "./BlogContext";
import blogs from "./blog-file";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: "Date",
      searchTerm: "",
      blogs: blogs.blogs,
      filteredBlogs: blogs.blogs
    };
  }

  filterBlogs = () => {
    const blogs = this.state.blogs.filter(blog =>
      blog.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
    this.setState({
      filteredBlogs: blogs
    });
  };

  handleUpdateSearchTerm = term => {
    this.setState({
      searchTerm: term
    });
  };

  handleUpdateOrder = sortBy => {
    this.setState({
      order: sortBy
    });
  };

  handleSearchSubmit = (searchTerm, sortBy) => {
    this.setState({
      searchTerm,
      sortBy
    });
  };

  render() {
    const contextValue = {
      blogs: this.state.blogs,
      searchTerm: this.state.searchTerm,
      sortBy: this.state.sortBy,
      searchSubmit: this.handleSearchSubmit
    };
    return (
      <div className="App">
        <BlogContext.Provider value={contextValue}>
          <NavBar />
          <Route path="/blog" component={NavSearch} />
          <Route exact path="/blog" component={BlogList} />
          <Route path="/blog/:blogID" component={BlogPage} />
        </BlogContext.Provider>
      </div>
    );
  }
}

export default App;
