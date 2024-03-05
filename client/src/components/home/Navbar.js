import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faRocket } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <nav className="navbar">
      <h2>
        <FontAwesomeIcon icon={faGlobe} /> Nicholas Jernigin
      </h2>
    </nav>
  );
}

export default Navbar;
