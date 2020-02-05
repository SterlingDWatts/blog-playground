import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import AboutMe from "./AboutMe";

describe(`AboutMe Component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AboutMe />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<AboutMe />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
