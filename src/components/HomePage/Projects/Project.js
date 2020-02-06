import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Project.css";

class Project extends Component {
  state = {
    showMore: false
  };

  handleButtonClick = () => {
    this.setState({
      showMore: !this.state.showMore
    });
  };

  render() {
    return (
      <div className="Project" id="projects">
        <header className="Project__header">
          <h3>{this.props.name}</h3>
        </header>
        <div className={"Project__pic " + this.props.name + "_pic"}>
          <div className="Project__about">
            <h5 className="Project__name_and_links">
              {this.props.name}
              {" | "}
              <a
                href={this.props.site}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live App
              </a>
              {" | "}
              <a
                href={this.props.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </h5>
            <p>{this.props.blurb}</p>
            {this.state.showMore && <p>{this.props.moreInfo}</p>}
            <button
              className="Project__more_info"
              onClick={this.handleButtonClick}
            >
              more info
            </button>
            {this.state.showMore && <p>{this.props.tech}</p>}
          </div>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  moreInfo: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired
};

export default Project;
