import React from "react";
import Input from "../Input";
import DisplayTask from "../DisplayTask";
import TopicHeader from "../TopicHeader";
import Resources from "../Resources";
import Stars from "../Stars";

function MainCard({ tasks, fetchAPI, topic, linkToResource }) {
  return (

    <div className="mainCard-wrapper">
      <div className="maincard--container">
        <TopicHeader topic={topic} />
        <Resources linkToResource={linkToResource} />
        <Stars />
        <Input fetchAPI={fetchAPI} topic={topic} />
        <DisplayTask tasks={tasks} fetchAPI={fetchAPI} topic={topic}/>
      </div>
    </div>
  
  );
}

export default MainCard;
