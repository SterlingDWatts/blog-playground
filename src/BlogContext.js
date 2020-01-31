import React from "react";

const BlogContext = React.createContext({
  blogs: [],
  searchTerm: "",
  sortBy: "",
  handleSubmitSearch: () => {}
});

export default BlogContext;
