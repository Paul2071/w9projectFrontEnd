/*
Plan
  This component contains the following components / 
  This is the main card the user will interact with: 

    - TopicText
    - Resources
    - Input
    - List
    - Stars
*/

/*
Code
 - add prop of ClassName to allow for styling
*/

import React from "react";
import Input from "../Input";


function MainCard() {
  return (
    <div className="maincard--container">
      <h3>MainCard here</h3>
     <Input ></Input>
  
    </div>
  );
}

export default MainCard;
