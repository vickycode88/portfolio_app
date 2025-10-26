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


import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">My Portfolio</Link>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Section */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Resume</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
