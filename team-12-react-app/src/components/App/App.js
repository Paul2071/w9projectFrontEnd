import "./App.css";
import NavBar from "../Navbar";
import WeekBar from "../WeekBar";
import MainCard from "../MainCard";
import React, {useEffect, useState} from "react";



function App() {
  const [tasks, setTasks] = useState([]);
  async function fetchAPI() {
    const response = await fetch("http://localhost:3005/computational_thinking");
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
      <MainCard tasks={tasks} fetchAPI={fetchAPI}/>   
    </div>
  );
}

export default App;
