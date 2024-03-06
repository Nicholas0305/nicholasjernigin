import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import skillsImg from "../pictures/skills.png";
function SkillsList() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled past a certain point (e.g., 100 pixels)
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isScrolled ? "skills-container" : ""}>
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
          src={skillsImg}
          width="300"
          height="200"
          alt="skills-img"
        />
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
            <li>BootStrap</li>
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
  );
}
export default SkillsList;
