import React from "react";
function IntroSection() {
  return (
    <section id="intro-section">
      <div className="intro-body">
        <h2>Hi I'm Nick, a Full Stack Software Engineer</h2>
        <p>
          As a recent graduate of Flatiron's software engineering program, I'm
          eager to enter the workforce. Throughout my academic journey, I've
          gained valuable experience by collaborating on projects with fellow
          alumni that align with real industry standards.
        </p>
      </div>
      <div>
        <img
          id="portrait"
          src="/pictures/portrait.png"
          width="300"
          height="500"
        />
      </div>
    </section>
  );
}
export default IntroSection;
