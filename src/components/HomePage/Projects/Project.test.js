import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Project from "./Project";

describe(`Project Component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Project />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<Project />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
