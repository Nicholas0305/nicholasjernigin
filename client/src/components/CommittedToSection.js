import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRibbon } from "@fortawesome/free-solid-svg-icons";
function CommittedToSection() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 2200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="committedTo-section-container">
      <h1 className="committedTo-header">
        What I'm Committed to{" "}
        <FontAwesomeIcon color="dodgerBlue" icon={faRibbon} />
      </h1>
      <div className={isScrolled ? "committedTo-card" : "null"}>
        <p className="committedTo-paragraph">
          As a passionate Full Stack Software Engineer, I embody a dedication to
          perpetual learning and the relentless pursuit of fresh insights. I
          approach every project with unwavering commitment, consistently
          delivering excellence while fostering seamless collaboration within my
          team. My joy stems from crafting transformative products that resonate
          with users, and I thrive amidst the challenges of high-pressure
          environments. Building bridges between innovation and user
          satisfaction is not just a job, but a fulfilling journey that drives
          me forward.
        </p>
      </div>
    </div>
  );
}
export default CommittedToSection;
