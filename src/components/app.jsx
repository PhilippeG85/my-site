import React from "react";
import { Switch, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


import Navbar from "./navbar";
import Tags from "./tags";
import Presentation from "./presentation";


library.add(fab);

function App() {
  return (
    <div className="landing-page">
      <Navbar />
      <Tags />
      <div className="right-content">
        <Switch>
          <Route exact path="/">
            <Presentation />
          </Route>
          <Route path="/about-me">
            <h1>About-me</h1>
          </Route>
          <Route path="/projects">
            <h1>Projects</h1>
          </Route>
          <Route path="/skills">
            <h1>Skills</h1>
          </Route>
          <Route path="/contact">
            <h1>Contact</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
