import React from "react";
import Project from "./project";

import css from "../assets/img/css.png";
import github from "../assets/img/github.png";
import rails from "../assets/img/rails.png";
import react from "../assets/img/react.png";
import js from "../assets/img/js.png";
import firebase from "../assets/img/firebase.png";
import netlify from "../assets/img/netlify.png";
import lestroismats from "../assets/img/lestroismats.jpg";
import website from "../assets/img/website.jpg";
import helper from "../assets/img/helper.png";

function Projects() {
  return (
    <div className="projects-name">
      <Project
        title="Les Trois Mats"
        link="https://www.les-trois-mats.com"
        receivedIcon={[css, react, github, netlify]}
        back={lestroismats}
      />
      <Project
        title="Philippe Gonse"
        link="#"
        receivedIcon={[css, react, github, firebase]}
        back={website}
      />
      <Project
        title="Helper"
        link="http://www.helper.solutions/"
        receivedIcon={[css, rails, js, github]}
        back={helper}
      />
    </div>
  );
}

export default Projects;
