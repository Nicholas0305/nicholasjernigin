import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { faHammer } from "@fortawesome/free-solid-svg-icons";
import amirite from "../pictures/amirite.png";
import websitePicture from "../pictures/website_project.png";
function ProjectSection() {
  return (
    <div id="project-section-container">
      <div id="project-section">
        <div className="vertical-line">
          <h1>
            Projects <FontAwesomeIcon color="dodgerBlue" icon={faHammer} />
          </h1>
          <a className="animated-a" href="https://github.com/Nicholas0305">
            Github <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <ul>
          <li>
            <div className="project-card">
              <img src={amirite} alt="Project " />
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
              <img src={websitePicture} alt="Project " />
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
    </div>
  );
}
export default ProjectSection;
