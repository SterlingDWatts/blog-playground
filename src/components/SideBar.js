import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./SideBar.css";

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <ul>
          <li className="SideBar__close">
            <FontAwesomeIcon icon={faTimes} />
          </li>
          <li>HOME</li>
          <li>CREATE</li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
