import React from "react";

function Skills() {
  const skills = ["React.js", "JavaScript", "Bootstrap", "HTML", "CSS"];
  return (
    <div className="container mt-5 text-center">
      <h2>Skills</h2>
      <ul className="list-inline mt-3">
        {skills.map((skill, i) => (
          <li className="list-inline-item m-2 p-2 border rounded bg-light" key={i}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
