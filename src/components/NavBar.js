import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <Link to="/blog">
          <div>Sterling | Blog</div>
        </Link>
        <div>=</div>
      </nav>
    );
  }
}

export default NavBar;
