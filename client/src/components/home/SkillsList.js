import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
function SkillsList() {
  return (
    <div className="skills-container">
      <div>
        <div id="skills-header-container">
          <h1 id="skills-header">Skills</h1>
          <h1 id="skills-description">
            {"  "}
            to pay the bills <FontAwesomeIcon icon={faCheckCircle} />
          </h1>
        </div>

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
