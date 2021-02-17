import React from "react";
import Project from "./project";

import css from "../assets/img/css.png";
import github from "../assets/img/github.png";
import rails from "../assets/img/rails.png";
import react from "../assets/img/react.png";
import js from "../assets/img/js.png";
import firebase from "../assets/img/firebase.png";
import netlify from "../assets/img/netlify.png";

function Projects() {
  return (
    <div className="projects-name">
      <Project title="Les Trois Mats" link="les-trois-mats.com" receivedIcon={[css, react, github, netlify]} />
      <Project title="Philippe Gonse" link="#" receivedIcon={[css, react, github, firebase]} />
      <Project title="Helper" link="helper.solutions" receivedIcon={[css, rails, js, github]} />
    </div>
  );
}

export default Projects;
