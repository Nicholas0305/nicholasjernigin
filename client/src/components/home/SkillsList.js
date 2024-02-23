import React from "react";
function SkillsList() {
  return (
    <div className="skills-container">
      <div>
        <h1>Skills</h1>
        <img
          id="skills-image"
          src="/pictures/skills.png"
          width="300"
          height="200"
        />
      </div>
      <div>
        <h1>Hard Skills</h1>
        <ul>
          <li>Git</li>
          <li>Javascript</li>
          <li>Python</li>
          <li>SQL</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>Flask</li>
          <li>BootStrap</li>
        </ul>
      </div>
      <div>
        <h1>Soft Skills</h1>
        <ul>
          <li>Interpersonal Skills</li>
          <li>Collaborative</li>
          <li>Analytical</li>
          <li>Life Long Learner</li>
          <li>Tactful</li>
        </ul>
      </div>
    </div>
  );
}
export default SkillsList;
