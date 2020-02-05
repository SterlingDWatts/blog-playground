import React, { Component } from "react";
import NavBarContext from "./NavBarContext";
import "./NavBarNavItem.css";

class NavBarNavItem extends Component {
  static contextType = NavBarContext;

  render() {
    const linkClass = "NavBarNavItem " + this.context.theme;
    return (
      <a className={linkClass} href={this.props.href}>
        {this.props.children}
      </a>
    );
  }
}

export default NavBarNavItem;
