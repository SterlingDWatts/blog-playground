import React, { Component } from "react";
import BlogBody from "./BlogBody/BlogBody";
import BlogNotFound from "./BlogNotFound/BlogNotFound";
import BlogListItem from "./BlogListItem/BlogListItem";
import BlogContext from "../BlogContext";
import "./BlogPage.css";

class BlogPage extends Component {
  static contextType = BlogContext;

  render() {
    const blogs = this.context.blogs;
    const blog = blogs.find(b => b.id === this.props.match.params.blogID);
    const blogBody = blog ? <BlogBody blog={blog} /> : <BlogNotFound />;
    const blogList =
      blogs.length > 1
        ? blogs
            .filter(b => b.id !== this.props.match.params.blogID)
            .slice(0, 2)
            .map(b => <BlogListItem blog={b} key={b.id} />)
        : " ";
    return (
      <div className="BlogPage">
        {blogBody}
        <ul>{blogList}</ul>
      </div>
    );
  }
}

export default BlogPage;
