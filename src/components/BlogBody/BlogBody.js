import React, { Component } from "react";
import PropTypes from "prop-types";
import "./BlogBody.css";

class BlogBody extends Component {
  render() {
    const content = this.props.blog.content.split("\n").map((paragraph, i) => (
      <p key={i} className="BlogBody__paragraph">
        {paragraph}
      </p>
    ));
    return (
      <main className="BlogBody">
        <header>
          <h2 className="BlogBody__title">{this.props.blog.title}</h2>
        </header>
        <div
          className="BlogBody__pic"
          style={{ backgroundImage: "url('" + this.props.blog.longPic + "')" }}
        ></div>
        <div className="BlogBody__date_and_author">
          <div className="BlogBody__date">{this.props.blog.date}</div>
          <div className="BlogBody__author">{this.props.blog.author}</div>
        </div>
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
