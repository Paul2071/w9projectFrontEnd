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

function Resources({href}) {
  return (
    <div className="resources">
      <a
        href={href}
        target="_blank"
      >
        View Resources
      </a>
    </div>
  );
}

export default Resources;
