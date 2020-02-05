import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavBarContext from "./NavBarContext";
import "./NavBarCollapse.css";

class NavBarCollapse extends Component {
  static contextType = NavBarContext;

  render() {
    const clone = React.cloneElement(this.props.children, {
      collapsedSub: "collapse"
    });
    const collapseClass = "NavBarCollapse__small_shadow " + this.context.theme;
    const expanded = !this.context.collapsed ? (
      <div className="NavBarCollapse__small" id="column">
        <div className={collapseClass}>{clone}</div>
      </div>
    ) : (
      " "
    );
    const buttonClass =
      "NavBarCollapse__hamburger_button " + this.context.theme;
    return (
      <>
        <button
          type="button"
          className={buttonClass}
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
