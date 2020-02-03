import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
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
          <NavBar fixed="top">
            <NavBar.Marque href="/blog">Sterling | Blog</NavBar.Marque>
            <NavBar.Collapse>
              <NavBar.Navigation>
                <NavBar.NavItem href="/">Home</NavBar.NavItem>
                <NavBar.NavItem href="/projects">Projects</NavBar.NavItem>
                <NavBar.NavItem href="/about">About Me</NavBar.NavItem>
                <NavBar.NavItem href="/create">Create</NavBar.NavItem>
              </NavBar.Navigation>
            </NavBar.Collapse>
          </NavBar>
          <Route exact path="/blog" component={BlogList} />
          <Route path="/blog/:blogID" component={BlogPage} />
        </BlogContext.Provider>
      </div>
    );
  }
}

export default App;
