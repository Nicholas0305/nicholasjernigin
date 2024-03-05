import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
function ProjectSection() {
  return (
    <div id="project-section">
      <div className="vertical-line">
        <h1>Projects</h1>
        <a className="animated-a" href="https://github.com/Nicholas0305">
          Github <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <ul>
        <li>
          <div className="project-card">
            <img src="/pictures/amirite.png" alt="Project Image" />
            <a
              href="https://github.com/Nicholas0305"
              className="project-description"
            >
              Amirite
            </a>
          </div>
        </li>
        <li>
          <div className="project-card">
            <img src="/pictures/website_project.png" alt="Project Image" />
            <a
              href="https://github.com/Nicholas0305"
              className="project-description"
            >
              Personal Website
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default ProjectSection;
