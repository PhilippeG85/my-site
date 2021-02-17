import React from "react";
import { Switch, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


import Navbar from "./navbar";
import Tags from "./tags";
import Presentation from "./presentation";
import About from "./about";
import Skills from "./skills";
import Loading from "./loading";
import Contact from "./contact";
import Projects from "./projects";


library.add(fab);

function App() {
  return (
    <div className="set-animation">
      <div className="landing-page">
        <Navbar />
        <Tags />
        <div className="right-content">
          <Switch>
            <Route exact path="/">
              <Presentation />
            </Route>
            <Route path="/about-me">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
      <div className="loading-page">
        <Loading />
      </div>
    </div>
  );
}

export default App;
