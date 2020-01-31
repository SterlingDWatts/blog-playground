import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import BlogNotFound from "./BlogNotFound";

describe(`BlogNotFound Component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BlogNotFound />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<BlogNotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
