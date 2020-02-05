import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import HomeLanding from "./HomeLanding";
import AboutMe from "./AboutMe";
import Projects from "./Projects/Projects";
import Connect from "./Connect";

import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <main className="HomePage">
        <NavBar fixed="top">
          <NavBar.Marque href="/">Sterling | Dev</NavBar.Marque>
          <NavBar.Collapse>
            <NavBar.Navigation>
              <NavBar.NavItem href="/projects">Projects</NavBar.NavItem>
              <NavBar.NavItem href="/about">About Me</NavBar.NavItem>
              <NavBar.NavItem href="/blog">Blog</NavBar.NavItem>
            </NavBar.Navigation>
          </NavBar.Collapse>
        </NavBar>
        <HomeLanding />
        <AboutMe />
        <Projects />
        <Connect />
      </main>
    );
  }
}

export default HomePage;
