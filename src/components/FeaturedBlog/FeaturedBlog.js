import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FeaturedBlog.css";

class FeaturedBlog extends Component {
  render() {
    const length = Math.floor(this.props.blog.content.length / 300);
    return (
      <li className="FeaturedBlog BlogList__item">
        <Link to={`/blog/${this.props.blog.id}`}>
          <img src={this.props.blog.longPic} alt="lorem picsum" />
        </Link>
        <Link to={`/blog/${this.props.blog.id}`}>
          <h3 className="FeaturedBlog__title">{this.props.blog.title}</h3>
        </Link>
        <div className="FeaturedBlog__date_and_length">
          {this.props.blog.date + " · " + length + " min read"}
        </div>
        <div className="FeaturedBlog__author">{this.props.blog.author}</div>
      </li>
    );
  }
}

export default FeaturedBlog;
