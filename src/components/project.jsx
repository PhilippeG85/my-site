import React, { useState } from "react";

function Project({
  title,
  link,
  receivedIcon,
  back
}) {
  const [display, setDisplay] = useState("none");
  const [backgroundImage, setBackgroundImage] = useState(`url("${back}")`);

  const icon = receivedIcon.map((i) => {
    return <img src={i} alt="" className="project-img" key={i} />;
  });

  const handleEnter = () => {
    setDisplay('block');
    setBackgroundImage(`linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,.4)), url("${back}")`);
  };

  const handleLeave = () => {
    setDisplay("none");
    setBackgroundImage(`url("${back}")`);
  };

  return (
    <div
      className="project"
      style={{ backgroundImage }}
      onMouseEnter={() => handleEnter()}
      onMouseLeave={() => handleLeave()}
    >
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
