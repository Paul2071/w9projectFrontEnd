/*
Plan
  This component is made up of a logo and burger menu
    - logo svg / png icon
    - svg / png icon
  
*/

/*
Code
  - Add className's for styling /  positioning
  - refer to images folder for icons / images

  
*/

import React from "react";
import hamburger from "../../images/hamburger.png";
import logo from "../../images/logo.png";

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo--container" alt="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="burgerMenu">
        <img src={hamburger} alt="hamburger menu" />
      </div>
    </div>
  );
}

export default NavBar;
