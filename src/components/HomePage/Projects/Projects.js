import React, { Component } from "react";
import Project from "./Project";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <section className="Projects" id="projects">
        <header className="Projects__header">
          <h2>Projects</h2>
        </header>
        <Project
          name="Quaff Quizz"
          pic="https://sterlingdwatts.github.io/portfolio/images/quaff-quiz-mobile.png"
          site="https://sterlingdwatts.github.io/quaff_quizz"
          repo="https://github.com/SterlingDWatts/quaff_quizz"
          blurb="A fun wine quiz web app with over 20 questions ranging over 4 topics."
          moreInfo="Each time you take the quiz, you will see a different combination of answers in a different order. If you need to focus on a particular topic, you can choose from popular subjects instead!"
          tech="Tech: HTML5, CSS3, javaScript, jQuery"
        />
        <Project
          name="Game Hub"
          pic="https://sterlingdwatts.github.io/portfolio/images/game-hub-mobile-landing-page.png"
          site="https://sterlingdwatts.github.io/game_hub"
          repo="https://github.com/SterlingDWatts/game_hub"
          blurb="The hottest new way to discover new board games!"
          moreInfo={
            "Game Hub allows users to search for a specific board game or select from an always updating list of the hottest trending games! Game Hub has detailed information about each game and has links for families the game belongs to so you can find similar games. On each game's info page, there are also links to any expansions that exist for the game, so that if you love the game you can keep the fun going!"
          }
          tech="Tech: HTML5, CSS3, javaScript, jQuery, XML, Board Game Geek API"
        />
      </section>
    );
  }
}

export default Projects;
