/*
Plan
  This component will return a h2 with a prop 
  We will hard code the props into it
*/

/*
Code
  - url prop will be handed in from App.js
*/

import React from "react";

function Resources() {
  return (
    <div className="resources">
      <a href="https://www.freecodecamp.org/news/html-full-course-for-beginners/">
        HTML: Full Course
      </a>
      <a href="https://www.w3schools.com/html/">HTML: Documentation </a>
    </div>
  );
}

export default Resources;
