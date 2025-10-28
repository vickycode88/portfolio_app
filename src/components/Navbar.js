// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
//       <div className="container">
//         <Link className="navbar-brand" to="/">My Portfolio</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item"><Link className="nav-link" to="/">About</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/skills">Skills</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/resume">Resume</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const location = useLocation();


  const handleLinkClick = () => {
    setIsCollapsed(true);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={handleLinkClick}>
          My Portfolio
        </Link>

      
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                to="/"
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`}
                to="/projects"
                onClick={handleLinkClick}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/skills" ? "active" : ""}`}
                to="/skills"
                onClick={handleLinkClick}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/resume" ? "active" : ""}`}
                to="/resume"
                onClick={handleLinkClick}
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
                to="/contact"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
