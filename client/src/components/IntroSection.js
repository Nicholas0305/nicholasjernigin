import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import portrait from "../pictures/portrait.png";
function IntroSection() {
  return (
    <section id="intro-section">
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
    </section>
  );
}
export default IntroSection;
