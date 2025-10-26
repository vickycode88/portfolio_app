import React from "react";

function Projects() {
  const projectList = [
    { title: "News App", desc: "Fetches global news using NewsAPI" },
    { title: "Portfolio", desc: "Personal portfolio website using React" },
  ];
  return (
    <div className="container mt-5">
      <h2 className="text-center">Projects</h2>
      <div className="row mt-4">
        {projectList.map((proj, i) => (
          <div className="col-md-6 mb-4" key={i}>
            <div className="card shadow-sm p-3">
              <h5>{proj.title}</h5>
              <p>{proj.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
