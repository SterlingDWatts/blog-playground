import React, { Component } from "react";
import PropTypes from "prop-types";
import "./BlogBody.css";

class BlogBody extends Component {
  render() {
    const content = this.props.blog.content
      .split("\n")
      .map((paragraph, i) => <p key={i}>{paragraph}</p>);
    return (
      <main className="BlogBody">
        <header>
          <h2>{this.props.blog.title}</h2>
        </header>
        <img src={this.props.blog.longPic} alt="fix-this" />
        {content}
      </main>
    );
  }
}

BlogBody.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    longPic: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    squarePic: PropTypes.string.isRequired
  })
};

export default BlogBody;
