import React, { useState } from "react";
import Navbar from "./Navbar";
import IntroSection from "./IntroSection";
import SkillsList from "./SkillsList";
import EducationSection from "./EducationSection";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import CommittedToSection from "./CommittedToSection";
import Footer from "./Footer";

function MainPage() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div id="mainpage-container">
      <Navbar />
      <IntroSection />
      <SkillsList />
      <div className="outer-scrolling-container">
        <div className="scrolling-container">
          <p className="scrolling-paragraph">
            Git - Javascript - Python - SQL - HTML - CSS - React - Flask -
            BootStrap - Interpersonal Skills - Collaborative - Analytical - Life
            Long Learner - Tactful - Git - Javascript - Python - SQL - HTML -
            CSS - React - Flask - BootStrap - Interpersonal Skills -
            Collaborative - Analytical - Life Long Learner - Tactful
          </p>
        </div>
      </div>

      <div id="project-section-outer-container">
        <ProjectSection />
      </div>
      <EducationSection />
      {/* <AboutSection /> */}
      <CommittedToSection />
      <Footer />
    </div>
  );
}

export default MainPage;
