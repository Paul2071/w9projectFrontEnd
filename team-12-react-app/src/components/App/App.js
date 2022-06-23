import "./App.css";
import NavBar from "../Navbar";
import WeekBar from "../WeekBar";
import MainCard from "../MainCard";
import React, { useEffect, useState } from "react";
import Topic from "../TopicText";


function App() {
  const [tasks, setTasks] = useState([]);

  async function fetchAPI() {
    const response = await fetch("http://localhost:3005/user_table");
    const data = await response.json();
    setTasks(data.payload.rows)
  }
  useEffect(()=> {
    fetchAPI();
    }, [])

  return (
    <div className="App">
      <NavBar />
      <WeekBar />

      <MainCard tasks={tasks} topic={tasks.topic} fetchAPI={fetchAPI}/>
      <MainCard tasks={tasks} fetchAPI={fetchAPI}/>     

    </div>
  );
}

export default App;
