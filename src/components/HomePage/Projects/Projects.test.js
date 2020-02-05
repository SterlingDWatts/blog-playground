import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Projects from "./Projects";

describe(`Projects Component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Projects />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<Projects />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
