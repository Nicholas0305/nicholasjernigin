import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <nav className="navbar">
      {/* <a href="#intro-section"> */}
      <h2>
        <FontAwesomeIcon icon={faGlobe} /> Nicholas Jernigin
      </h2>
      {/* </a> */}
    </nav>
  );
}

export default Navbar;
