import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import amirite from "../pictures/amirite.png";
import emailtrace from "../pictures/emailtrace.png";
import pomodoro from "../pictures/pomodoro.png";
import websitePicture from "../pictures/personal_website.png";

function ProjectSection() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 925);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="project-section-container">
      <div id="project-section">
        <div className="vertical-line">
          <h1 id="project-header">
            Projects{" "}
            <FontAwesomeIcon
              id="hammer-icon"
              color="dodgerBlue"
              icon={faHammer}
            />
          </h1>
          <a className="animated-a" href="https://github.com/Nicholas0305">
            Github <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <ul id="project-list">
          {[
            {
              name: "Amirite",
              imageUrl: amirite,
              link: "https://github.com/Nicholas0305/amirite",
            },
            {
              name: "Email Trace",
              imageUrl: emailtrace,
              link: "https://github.com/Alexisaacs18/email_tracking_project",
            },
            {
              name: "Pomodoro",
              imageUrl: pomodoro,
              link: "https://github.com/ekollie/Pomodoro",
            },
            {
              name: "Website",
              imageUrl: websitePicture,
              link: "https://github.com/Nicholas0305/nicholasjernigin",
            },
          ].map((project, index) => (
            <li key={index} className="project-list-li">
              <div className={isScrolled ? "project-card" : "null"}>
                <img src={project.imageUrl} alt="Project " />
                <a href={project.link} className="project-description">
                  {project.name}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectSection;
