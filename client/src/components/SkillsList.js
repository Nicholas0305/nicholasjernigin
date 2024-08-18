import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faHandshake } from "@fortawesome/free-solid-svg-icons";

function SkillsList() {
  return (
    <div className="skills-container">
      <div id="skills-container">
        <div id="skills-header-container">
          <h1 id="skills-header">Skills</h1>
        </div>

        <div id="skills-lists-container">
          <div>
            <h1>
              Hard Skills <FontAwesomeIcon color="dodgerBlue" icon={faTools} />
            </h1>
            <ul>
              <li>Git</li>
              <li>Javascript</li>
              <li>Python</li>
              <li>SQL</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>Flask</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div>
            <h1>
              Soft Skills{" "}
              <FontAwesomeIcon color="dodgerBlue" icon={faHandshake} />
            </h1>
            <ul>
              <li>Interpersonal Skills</li>
              <li>Collaborative</li>
              <li>Analytical</li>
              <li>Life Long Learner</li>
              <li>Tactful</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsList;
