import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BlogListItem.css";

class BlogListItem extends Component {
  render() {
    const length = Math.floor(this.props.blog.content.length / 300);
    return (
      <li className="BlogListItem BlogList__item">
        <div className="BlogListItem__info">
          <Link to={`/blog/${this.props.blog.id}`}>
            <h3 className="BlogListItem__title">{this.props.blog.title}</h3>
          </Link>
          <div className="BlogListItem__date_and_length">
            {this.props.blog.date + " · " + length + " min read"}
          </div>
          <div className="BlogListItem__author">{this.props.blog.author}</div>
        </div>
        <div className="BlogListItem__pic_holder">
          <Link to={`/blog/${this.props.blog.id}`}>
            <img src={this.props.blog.squarePic} alt="lorem picsum" />
          </Link>
        </div>
      </li>
    );
  }
}

export default BlogListItem;
