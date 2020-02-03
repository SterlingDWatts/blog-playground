import React, { Component } from "react";
import NavBarMarque from "./NavBarMarque";
import NavBarCollapse from "./NavBarCollapse";
import NavBarNavigation from "./NavBarNavigation";
import NavBarNavItem from "./NavBarNavItem";
import NavBarContext from "./NavBarContext";
import "./NavBar.css";

class NavBar extends Component {
  static defaultProps = {
    theme: "elpheba",
    direction: "row",
    fixed: "false"
  };

  constructor(props) {
    super(props);
    this.state = {
      theme: this.props.theme,
      direction: this.props.direction,
      fixed: this.props.fixed,
      collapsed: true
    };
  }

  handleCollapseToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const value = {
      theme: this.state.theme,
      direction: this.state.direction,
      collapsed: this.state.collapsed,
      toggleCollapse: this.handleCollapseToggle
    };
    return (
      <NavBarContext.Provider value={value}>
        <nav className="NavBar">{this.props.children}</nav>
      </NavBarContext.Provider>
    );
  }
}

NavBar.Marque = NavBarMarque;
NavBar.Collapse = NavBarCollapse;
NavBar.Navigation = NavBarNavigation;
NavBar.NavItem = NavBarNavItem;

export default NavBar;
