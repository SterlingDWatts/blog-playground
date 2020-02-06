import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Project from "./Project";

describe(`Project Component`, () => {
  const project = (
    <Project
      name="Quaff Quizz"
      pic="https://sterlingdwatts.github.io/portfolio/images/quaff-quiz-mobile.png"
      site="https://sterlingdwatts.github.io/quaff_quizz"
      repo="https://github.com/SterlingDWatts/quaff_quizz"
      blurb="A fun wine quiz web app with over 20 questions ranging over 4 topics."
      moreInfo="Each time you take the quiz, you will see a different combination of answers in a different order. If you need to focus on a particular topic, you can choose from popular subjects instead!"
      tech="Tech: HTML5, CSS3, javaScript, jQuery"
    />
  );
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(project, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(project).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
