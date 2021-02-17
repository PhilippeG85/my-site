import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faEye,
  faBook,
  faEnvelope,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Navbar() {
  const [displayH, setDisplayH ] = useState(false);
  const [displayA, setDisplayA ] = useState(false);
  const [displayP, setDisplayP ] = useState(false);
  const [displayS, setDisplayS ] = useState(false);
  const [displayC, setDisplayC ] = useState(false);
  const [displayMobile, setDisplayMobile ] = useState("none");


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
    <>
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
      <div className="navbar-element-mobile">
        <p className="p-icon p-icon-mobile">P</p>
        <FontAwesomeIcon className="icon-mobile" icon={faBars} onClick={() => setDisplayMobile(displayMobile === "none" ? "block" : "none")} />
        <div className="on-click-menu" style={{ display: displayMobile }}>
          <div className="mobile-menu">
            <Link to="/" className="menu-element menu-element-mobile" onClick={() => setDisplayMobile("none")}>Home</Link>
            <Link to="/about-me" className="menu-element menu-element-mobile" onClick={() => setDisplayMobile("none")}>About Me</Link>
            <Link to="/projects" className="menu-element menu-element-mobile" onClick={() => setDisplayMobile("none")}>Projects</Link>
            <Link to="/skills" className="menu-element menu-element-mobile" onClick={() => setDisplayMobile("none")}>Skills</Link>
            <Link to="/contact" className="menu-element menu-element-mobile" onClick={() => setDisplayMobile("none")}>Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
