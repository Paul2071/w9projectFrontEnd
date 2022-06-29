import React from "react";
import hamburger from "../../images/hamburger.png";
import logo from "../../images/logo.png";

  

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo--container" alt="logo">
        <img src={logo} alt="School of Code logo" className="logo" />
      </div>
      <p className="logoType">SoC Proficiency Tracker</p>
      <div className="burgerMenu">
        <img src={hamburger} alt="hamburger menu button" />
      </div>
    </div>
  );
}

export default NavBar;
