import React, { Component } from "react";
import NavBarContext from "./NavBarContext";
import "./NavBarNavItem.css";

class NavBarNavItem extends Component {
  static contextType = NavBarContext;

  render() {
    return (
      <a className="NavBarNavItem" href={this.props.href}>
        {this.props.children}
      </a>
    );
  }
}

export default NavBarNavItem;
