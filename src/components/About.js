import React from "react";
import LazyImage from "../LazyImage";

function About() {
  return (
    <div className="container text-center mt-5">
      <h1>About Me</h1>
      <LazyImage src="/profile.jpg" alt="Profile" className="rounded-circle mt-3" />
      <p className="mt-4">Hi, I'm Vicky Das, a passionate web developer who loves building modern, responsive web applications using React.js and Bootstrap.</p>
    </div>
  );
}

export default About;
