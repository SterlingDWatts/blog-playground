import React, { Component } from "react";
import "./HomeLanding.css";

class HomeLanding extends Component {
  render() {
    return (
      <section className="HomeLanding">
        <div className="HomeLanding__header">
          <header>
            <h1>Sterling Watts</h1>
            <h4>Full Stack Web Developer</h4>
          </header>
        </div>
        <div className="HomeLanding__italy_image"></div>
        <div className="HomeLanding__blurb">
          <p>
            I am a passionate Full Stack Web Developer that enjoys making
            beautiful and intuitive websites as well as analyzing the data that
            I can get from them!
          </p>
        </div>
      </section>
    );
  }
}

export default HomeLanding;
