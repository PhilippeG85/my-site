import React, { useState } from "react";

function Project({ title, link, receivedIcon }) {
  const [display, setDisplay] = useState("none");

  const icon = receivedIcon.map((i) => {
    return <img src={i} alt="" className="project-img" />;
  });

  return (
    <div className="project" onMouseEnter={() => setDisplay("block")} onMouseLeave={() => setDisplay("none")}>
      <div className="project-info" style={{ display }}>
        <h1 className="project-name">{title}</h1>
        <a href={link} target="_blank" rel="noreferrer" className="project-link">View Project</a>
        <div className="project-icon">
          {icon}
        </div>
      </div>
    </div>
  );
}

export default Project;
