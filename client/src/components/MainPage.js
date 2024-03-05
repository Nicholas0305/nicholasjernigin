import React from "react";
import Navbar from "./Navbar";
import IntroSection from "./IntroSection";
import SkillsList from "./SkillsList";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import Footer from "./Footer";

function MainPage() {
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
      <AboutSection />
      <div id="project-section-outer-container">
        <ProjectSection />
      </div>
      <Footer />
    </div>
  );
}
export default MainPage;
