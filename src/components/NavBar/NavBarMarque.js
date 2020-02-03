import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBarContext from "./NavBarContext";
import "./NavBarMarque.css";

class NavBarMarque extends Component {
  static contextType = NavBarContext;

  render() {
    return (
      <div className="NavBarMarque">
        <Link to={this.props.href}>{this.props.children}</Link>
      </div>
    );
  }
}

export default NavBarMarque;
