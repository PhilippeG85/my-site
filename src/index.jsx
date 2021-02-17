import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import './assets/stylesheets/application.scss';
import App from "./components/app";
import { IsMobileComponentProvider } from "./components/isMobileContext";


const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Router>
      <IsMobileComponentProvider>
        <App />
      </IsMobileComponentProvider>
    </Router>,
    root
  );
}
