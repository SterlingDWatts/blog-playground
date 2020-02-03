import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavBarContext from "./NavBarContext";
import "./NavBarCollapse.css";

class NavBarCollapse extends Component {
  static contextType = NavBarContext;

  render() {
    const expanded = !this.context.collapsed ? (
      <div className="NavBarCollapse__small">{this.props.children}</div>
    ) : (
      " "
    );
    return (
      <>
        <button
          type="button"
          className="NavBarCollapse__hamburger_button"
          onClick={this.context.toggleCollapse}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="NavBarCollapse__big">{this.props.children}</div>
        {expanded}
      </>
    );
  }
}

export default NavBarCollapse;
