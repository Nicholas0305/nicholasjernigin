import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function EducationSection() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="education-section-container">
      <div id="education-section-title-container">
        <h2>
          Education{" "}
          <FontAwesomeIcon color="dodgerBlue" icon={faGraduationCap} />
        </h2>
      </div>
      <div id={isScrolled ? "education-section-blocks-container" : "null"}>
        <ul className="education-list">
          <li className="education-list-item">
            <h2 className="education-header">Flatiron</h2>
            <p className="education-paragraph">
              Here I learned what it means to be a Full Stack Software Engineer.
              I learned a full tech stack over the course of 15 weeks, and more
              importantly learned how to approach and solve problems in and out
              of tech.
            </p>
          </li>
          <li className="education-list-item">
            <h2 className="education-header">FreeCodeCamp</h2>
            <p className="education-paragraph">
              FreeCodeCamp has been an excellent source of education for me, as
              it's allowed me to practice and further develop my skills on a
              fundamental level.
            </p>
          </li>
          <li className="education-list-item">
            <h2 className="education-header">Certifications</h2>
            <ul className="certifications-list">
              <li>Flatiron - Full Stack Software Engineer Certification</li>
              <li>FreeCodeCamp - Responsive Web Design Certification</li>
              <li>Testout - PC Pro Certification</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EducationSection;
