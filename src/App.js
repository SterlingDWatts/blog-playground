import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import BlogList from "./components/BlogList/BlogList";
import BlogPage from "./components/BlogPage/BlogPage";
import Create from "./components/Create/Create";
import BlogContext from "./BlogContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
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
          <Route exact path="/" component={HomePage} />
          <Route exact path="/blog" component={BlogList} />
          <Route exact path="/create" component={Create} />
          <Route path="/blog/:blogID" component={BlogPage} />
          <NavBar theme="elpheba">
            <NavBar.Navigation size="fill">
              <NavBar.NavItem href="https://www.github.com">
                <FontAwesomeIcon icon={faGithub} />
              </NavBar.NavItem>
              <NavBar.NavItem href="https://www.linkedin.com/in/sterlingdwatts">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </NavBar.NavItem>
              <NavBar.NavItem href="https://www.facebook.com/sterlingdwatts">
                <FontAwesomeIcon icon={faFacebookF} />
              </NavBar.NavItem>
              <NavBar.NavItem href="https://www.instagram.com/sterlingdwatts">
                <FontAwesomeIcon icon={faInstagram} />
              </NavBar.NavItem>
              <NavBar.NavItem href="https://www.twitter.com/sterlingdwatts">
                <FontAwesomeIcon icon={faTwitter} />
              </NavBar.NavItem>
            </NavBar.Navigation>
          </NavBar>
        </BlogContext.Provider>
      </div>
    );
  }
}

export default App;
