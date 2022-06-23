import "./App.css";
import NavBar from "../Navbar";
import WeekBar from "../WeekBar";
import MainCard from "../MainCard";
import React, { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  async function fetchAPI() {
    const response = await fetch("http://localhost:3005/user_table");
    const data = await response.json();

    setTasks(data.payload.rows)
    console.log(data.payload.rows)
  }
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <WeekBar />


      <MainCard tasks={tasks} lesson="HTML" fetchAPI={fetchAPI} href={"https://www.freecodecamp.org/news/html-full-course-for-beginners/"}/>
      <MainCard tasks={tasks} lesson="Javascript" fetchAPI={fetchAPI} href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}/>
      <MainCard tasks={tasks} lesson="CSS" fetchAPI={fetchAPI} href={"https://www.youtube.com/watch?v=ouncVBiye_M&ab_channel=Fireship"}/>


    </div>
  );
}

export default App;
