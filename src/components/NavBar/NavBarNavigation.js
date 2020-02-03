import React, { Component } from "react";
import NavBarContext from "./NavBarContext";
import "./NavBarNavigation.css";

class NavBarNavigation extends Component {
  static contextType = NavBarContext;

  render() {
    const navItems = this.props.children.map((item, i) => {
      return <li key={i}>{item}</li>;
    });
    return (
      <nav className="NavBarNavigation">
        <ul className="NavBarNavigation__list">{navItems}</ul>
      </nav>
    );
  }
}

export default NavBarNavigation;
