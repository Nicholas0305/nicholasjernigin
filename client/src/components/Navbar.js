import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <nav className="navbar">
      <h2 href="navbar">
        <FontAwesomeIcon icon={faGlobe} /> Nicholas Jernigin
      </h2>
    </nav>
  );
}

export default Navbar;
