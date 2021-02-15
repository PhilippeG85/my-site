import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

function Loading() {
  return (
    <div className="loading-info">
      <h1>
        Philippe is gathering informations and
        <br />
        build the page for you
      </h1>
      <FontAwesomeIcon className="loading-icon" icon={faCogs} />
    </div>
  );
}

export default Loading;
