import React from "react";

function Resume() {
  return (
    <div className="container mt-5 text-center">
      <h2>Resume</h2>
      <p>Download my resume below:</p>
      <a href="/resume.pdf" className="btn btn-primary" download>Download Resume</a>
    </div>
  );
}

export default Resume;
