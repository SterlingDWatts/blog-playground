import React, { Component } from "react";
import NavBarContext from "./NavBarContext";
import "./NavBarNavigation.css";

class NavBarNavigation extends Component {
  static contextType = NavBarContext;

  static defaultProps = {
    collapsedSub: false,
    size: "s"
  };

  navBarClasses = () => {
    let classNames = [this.props.collapsedSub, this.props.size];
    classNames = classNames
      .filter(name => name)
      .map(name => "NavBarNavigation__" + name);
    classNames.push("NavBarNavigation");
    classNames = classNames.join(" ");
    return classNames;
  };

  itemsClasses = () => {
    let classNames = ["NavBarNavigation__item", this.props.collapsedSub];
    classNames = classNames.filter(name => name).join(" ");
    return classNames;
  };

  render() {
    const itemClassNames = this.itemsClasses();
    const navItems = this.props.children.map((item, i) => {
      return (
        <li key={i}>
          <div className={itemClassNames}>{item}</div>
        </li>
      );
    });
    const navClassNames = this.navBarClasses();
    return (
      <nav className={navClassNames}>
        <ul className="NavBarNavigation__list">{navItems}</ul>
      </nav>
    );
  }
}

export default NavBarNavigation;
