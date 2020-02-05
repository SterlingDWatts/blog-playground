import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import "./CreateBlog.css";

class CreateBlog extends Component {
  render() {
    return (
      <div className="CreateBlog">
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
      </div>
    );
  }
}

export default CreateBlog;
