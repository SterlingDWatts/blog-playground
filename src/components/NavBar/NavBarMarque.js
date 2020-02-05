import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBarContext from "./NavBarContext";
import "./NavBarMarque.css";

class NavBarMarque extends Component {
  static contextType = NavBarContext;

  render() {
    const linkClass = this.context.theme;

    return (
      <button type="button" className="NavBarMarque">
        <Link to={this.props.href} className={linkClass}>
          {this.props.children}
        </Link>
      </button>
    );
  }
}

export default NavBarMarque;
