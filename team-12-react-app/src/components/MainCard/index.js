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
import ListItem from "../List";
import Topic from "../TopicText";
import Resources from "../Resources";
import Stars from "../Stars";

/*
run front and back end servers
import useState + useEffect from React
write fetch request to get all route on server
use useEffect to call fetch function when page loads
*/

function MainCard({ tasks, fetchAPI }) {
  console.log(tasks);
  return (
    <div className="maincard--container">
      <Topic />
      <Resources />
      <Stars />
      <Input fetchAPI={fetchAPI} />
      <ListItem tasks={tasks} fetchAPI={fetchAPI}></ListItem>

    </div>
  );
}

export default MainCard;
