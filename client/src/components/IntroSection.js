import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import portrait from "../pictures/portrait.png";
function IntroSection() {
  return (
    <div id="intro-section">
      <div className="intro-body">
        <h2>
          Hi I'm Nick, a Full Stack Software Engineer{" "}
          <FontAwesomeIcon id="rocket" icon={faRocket} />
        </h2>
        <p>
          As a recent graduate of Flatiron's software engineering program, I'm
          eager to enter the workforce. Throughout my academic journey, I've
          gained valuable experience by collaborating on projects with fellow
          alumni that align with real industry standards.{" "}
        </p>
        <a
          className="animated-a"
          href="https://www.linkedin.com/in/nicholas-jernigin-0a46362a2"
        >
          Linkedin <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className="animated-a" href="https://github.com/Nicholas0305">
          Github <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div>
        <img
          id="portrait"
          src={portrait}
          width="300"
          height="500"
          alt="portrait"
        />
      </div>
    </div>
  );
}
export default IntroSection;
