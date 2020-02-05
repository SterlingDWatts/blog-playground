import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import HomeLanding from "./HomeLanding";

describe(`HomeLanding Component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HomeLanding />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<HomeLanding />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
