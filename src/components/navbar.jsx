import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faEye,
  faBook,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Navbar() {
  const [displayH, setDisplayH ] = useState(false);
  const [displayA, setDisplayA ] = useState(false);
  const [displayP, setDisplayP ] = useState(false);
  const [displayS, setDisplayS ] = useState(false);
  const [displayC, setDisplayC ] = useState(false);

  const currentPath = window.location.pathname;

  const handlePath = (path) => {
    return path === currentPath ? "active" : null;
  };

  // const load = document.querySelector(".loading-page");
  const handleClick = () => {
    // load.classList.add('translate');
    // setTimeout(() => {
    //   load.classList.add("translat");
    // }, 2000);
    // setTimeout(() => {
    //   load.classList.remove("translate", "translat");
    // }, 3000);
    console.log('null');
  };

  return (
    <div className="navbar-element">
      <p className="p-icon">P</p>
      <div className="navbar-menu">
        <Link
          className={`menu-element ${handlePath("/")}`}
          to="/"
          onMouseEnter={() => { setDisplayH(true); }}
          onMouseLeave={() => { setDisplayH(false); }}
          onClick={() => handleClick()}
        >
          <FontAwesomeIcon className="menu-icon" icon={faHome} style={{ display: displayH ? "none" : "block" }} />
          <p style={{ display: displayH ? "block" : "none" }}>Home</p>
        </Link>
        <Link
          className={`menu-element ${handlePath("/about-me")}`}
          to="/about-me"
          onMouseEnter={() => { setDisplayA(true); }}
          onMouseLeave={() => { setDisplayA(false); }}
          onClick={() => handleClick()}
        >
          <FontAwesomeIcon className="menu-icon" icon={faUser} style={{ display: displayA ? "none" : "block" }} />
          <p style={{ display: displayA ? "block" : "none" }}>About</p>
        </Link>
        <Link
          className={`menu-element ${handlePath("/projects")}`}
          to="/projects"
          onMouseEnter={() => { setDisplayP(true); }}
          onMouseLeave={() => { setDisplayP(false); }}
          onClick={() => handleClick()}
        >
          <FontAwesomeIcon className="menu-icon" icon={faEye} style={{ display: displayP ? "none" : "block" }} />
          <p style={{ display: displayP ? "block" : "none" }}>Projects</p>
        </Link>
        <Link
          className={`menu-element ${handlePath("/skills")}`}
          to="/skills"
          onMouseEnter={() => { setDisplayS(true); }}
          onMouseLeave={() => { setDisplayS(false); }}
          onClick={() => handleClick()}
        >
          <FontAwesomeIcon className="menu-icon" icon={faBook} style={{ display: displayS ? "none" : "block" }} />
          <p style={{ display: displayS ? "block" : "none" }}>Skills</p>
        </Link>
        <Link
          className={`menu-element ${handlePath("/contact")}`}
          to="/contact"
          onMouseEnter={() => { setDisplayC(true); }}
          onMouseLeave={() => { setDisplayC(false); }}
          onClick={() => handleClick()}
        >
          <FontAwesomeIcon className="menu-icon" icon={faEnvelope} style={{ display: displayC ? "none" : "block" }} />
          <p style={{ display: displayC ? "block" : "none" }}>Contact</p>
        </Link>
      </div>
      <div className="social-menu">
        <a href="https://github.com/PhilippeG85">
          <FontAwesomeIcon className="social-icon" icon={['fab', 'github']} />
        </a>
        <a href="https://www.linkedin.com/in/philippe-gonse/">
          <FontAwesomeIcon className="social-icon" icon={['fab', 'linkedin']} />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
