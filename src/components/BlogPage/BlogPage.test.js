import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import BlogPage from "./BlogPage";

describe(`BlogPage Component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BlogPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<BlogPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
