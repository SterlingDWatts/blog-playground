import React, { Component } from "react";
import NavBarMarque from "./NavBarMarque";
import NavBarCollapse from "./NavBarCollapse";
import NavBarNavigation from "./NavBarNavigation";
import NavBarNavItem from "./NavBarNavItem";
import NavBarContext from "./NavBarContext";
import "./NavBar.css";

class NavBar extends Component {
  static defaultProps = {
    theme: "light",
    direction: "row",
    fixed: false,
    justify: "space-between"
  };

  constructor(props) {
    super(props);
    this.state = {
      theme: this.props.theme,
      direction: this.props.direction,
      fixed: this.props.fixed,
      collapsed: true,
      justify: this.props.justify,
      shadow: this.props.shadow
    };
  }

  handleCollapseToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  navBarClassNames = () => {
    let classNames = [
      this.state.direction,
      this.state.fixed,
      this.state.justify,
      this.state.theme,
      this.state.shadow
    ]
      .filter(className => className)
      .map(className => "NavBar__" + className);
    classNames.push("NavBar");
    classNames = classNames.join(" ");
    return classNames;
  };

  render() {
    const value = {
      theme: this.state.theme,
      direction: this.state.direction,
      collapsed: this.state.collapsed,
      toggleCollapse: this.handleCollapseToggle
    };
    const classNames = this.navBarClassNames();
    return (
      <NavBarContext.Provider value={value}>
        <nav className={classNames}>
          <div className="NavBar__container">{this.props.children}</div>
        </nav>
      </NavBarContext.Provider>
    );
  }
}

NavBar.Marque = NavBarMarque;
NavBar.Collapse = NavBarCollapse;
NavBar.Navigation = NavBarNavigation;
NavBar.NavItem = NavBarNavItem;

export default NavBar;
