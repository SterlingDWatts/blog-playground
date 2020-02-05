import React, { Component } from "react";
import NavBarContext from "./NavBarContext";
import "./NavBarNavLink.css";

class NavBarNavLink extends Component {
  static contextType = NavBarContext;

  render() {
    const linkClass = "NavBarNavLink " + this.context.theme;
    return (
      <a className={linkClass} href={this.props.href}>
        {this.props.children}
      </a>
    );
  }
}

export default NavBarNavItem;
