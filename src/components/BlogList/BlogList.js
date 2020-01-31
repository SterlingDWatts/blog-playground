import React, { Component } from "react";
import FeaturedBlog from "../FeaturedBlog/FeaturedBlog";
import BlogListItem from "../BlogListItem/BlogListItem";
import BlogContext from "../../BlogContext";
import "./BlogList.css";

class BlogList extends Component {
  static contextType = BlogContext;

  render() {
    const blogs = this.context.blogs;
    const featBlog = blogs.length > 0 ? <FeaturedBlog blog={blogs[0]} /> : " ";
    const blogsList =
      blogs.length > 1
        ? blogs.slice(1).map(blog => <BlogListItem blog={blog} key={blog.id} />)
        : " ";
    return (
      <ul className="BlogList">
        {featBlog}
        {blogsList}
      </ul>
    );
  }
}

export default BlogList;
