import React, { Component } from "react";
import "./AboutMe.css";

class AboutMe extends Component {
  render() {
    return (
      <section className="AboutMe" id="about-me">
        <header>
          <h2>About Me</h2>
        </header>
        <p>
          I love to code! I have studied Data Analysis on DataQuest and am
          taking the Full Stack Web Developer bootcamp with Bloc. What I
          appreciate most about coding is being able to make something that
          people can use and will enhance their lives. I'm a problem solver and
          a technophile which I want to use to enrich peoples lives. When I am
          not building the front of a website, I love to geek out on the data I
          can get from it and how I can use it to improve the user experience.
        </p>
        <p>
          Coding isn't my only passion. My board game shelf is overflowing with
          games, my favorites being modern Euro style board games like Scythe.
          Additionally, I am a huge wine nerd. I even have a Certified Sommelier
          certificate to prove it! I appreciate sharing my knowledge about wine
          with people and engaging with them as to how the they perceive the
          wine in relation to aroma and taste. Feel free to contact me or follow
          me on social media and be sure to browse my projects!
        </p>
      </section>
    );
  }
}

export default AboutMe;
