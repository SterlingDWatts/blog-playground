import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import BlogContext from "../../BlogContext";
import blogs from "../../blog-file";
import BlogList from "./BlogList";

describe(`BlogList Component`, () => {
  // TODO add snapshot with context content

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <BlogList />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <BlogList />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders list items when context is passed in", () => {
    const contextValue = {
      blogs
    };
    const tree = renderer
      .create(
        <BlogContext.Provider value={contextValue}>
          <BrowserRouter>
            <BlogList />
          </BrowserRouter>
        </BlogContext.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
