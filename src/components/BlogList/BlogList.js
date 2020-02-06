import React, { Component } from "react";
import FeaturedBlog from "../FeaturedBlog/FeaturedBlog";
import BlogListItem from "../BlogListItem/BlogListItem";
import NavBar from "../NavBar/NavBar";
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
      <div className="BlogList">
        <NavBar fixed="top" theme="light-green" shadow="hide-shadow">
          <NavBar.Marque href="/blog">Sterling | Blog</NavBar.Marque>
          <NavBar.Collapse>
            <NavBar.Navigation>
              <NavBar.NavItem href="/#about-me">About Me</NavBar.NavItem>
              <NavBar.NavItem href="/#projects">Projects</NavBar.NavItem>
              <NavBar.NavItem href="/#connect">Connect</NavBar.NavItem>
              <NavBar.NavItem href="/">Home</NavBar.NavItem>
            </NavBar.Navigation>
          </NavBar.Collapse>
        </NavBar>
        <ul className="BlogList__list">
          {featBlog}
          {blogsList}
        </ul>
      </div>
    );
  }
}

export default BlogList;
