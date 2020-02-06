import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FeaturedBlog.css";

class FeaturedBlog extends Component {
  render() {
    const length = Math.floor(this.props.blog.content.length / 300);
    return (
      <li className="FeaturedBlog BlogList__item">
        <Link to={`/blog/${this.props.blog.id}`}>
          <div
            className="FeaturedBlog__pic"
            style={{
              backgroundImage: "url('" + this.props.blog.longPic + "')"
            }}
          />
        </Link>
        <Link
          to={`/blog/${this.props.blog.id}`}
          className="FeaturedBlog__title_link"
        >
          <h3 className="FeaturedBlog__title">{this.props.blog.title}</h3>
        </Link>
        <div className="FeaturedBlog__date_and_length">
          {this.props.blog.date + " · " + length + " min read"}
        </div>
        <div className="FeaturedBlog__author">{this.props.blog.author}</div>
        <div className="FeaturedBlog__line"> </div>
      </li>
    );
  }
}

export default FeaturedBlog;
