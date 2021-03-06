import React, { Component } from "react";
import "./Connect.css";

class Connect extends Component {
  render() {
    return (
      <section className="Connect" id="connect">
        <div className="Connect__pic"></div>
        <div className="Connect__info" id="connect">
          <header>
            <h2>Connect</h2>
          </header>
          <ul>
            <li>Cell: 858609.9463</li>
            <li>
              Email:{" "}
              <a
                href="mailto:SterlingDWatts@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                SterlingDWatts@gmail.com
              </a>
            </li>
            <li>
              GitHub Repo:{" "}
              <a
                href="https://github.com/SterlingDWatts"
                target="_blank"
                rel="noopener noreferrer"
              >
                /SterlingDWatts
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                href="https://linkedin.com/in/sterlingdwatts"
                target="_blank"
                rel="noopener noreferrer"
              >
                in/SterlingDWatts
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Connect;
