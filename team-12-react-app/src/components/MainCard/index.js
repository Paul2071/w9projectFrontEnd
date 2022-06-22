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

/*
run front and back end servers
import useState + useEffect from React
write fetch request to get all route on server
use useEffect to call fetch function when page loads
*/

async function fetchAPI() {
  const response = await fetch("http://localhost:3005/computational_thinking");
  const data = await response.json();
  console.log(data.payload.rows);
}



function MainCard() {
  return (
    <div className="maincard--container">
      <h3>MainCard here</h3>
     <Input ></Input>
     <button onClick={() => {fetchAPI()}}>Click</button>
      
    </div>
  );
}

export default MainCard;
