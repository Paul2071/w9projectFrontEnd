/*
Plan
  This component renders an <li> with user input 
  The component will feature an edit button, a delete button and a checkbox button

  <li> value will be received from Input component via props data
*/

/*
Code
 - Text value of Input  |   DeleteButton   |    CheckboxButton
    - Text value comes in from Input as props

  Edit Button: 
    - onClick event that triggers function: PUT request updating content 

  Delete Button: 
    - onClick event that triggers function: DELETE request updating content 

  Checkbox Button
    - a boolean value to express isTicked ? "yes" : "no"




    ***** 
        -  EditButton considered but deleted from App functionality for now. Will be added   if requirements change.
*/


import React from "react";
import { useState } from "react"
import "../App/App.css"



function ListItem({tasks}){

  const [toDoList, setToDoList] = useState([]);

  const [toggleClass, setToggleClass] = useState(false);

  // event.target.style.textDecoration

  function handleToggle (event) {
  if (tasks.is_complete === false) {
    event.target.style.removeProperty('text-decoration');
  } else {
    event.target.style.setProperty('text-decoration', 'line-through');
  }
}

//function to change boolean value of is_completed column in DB
function updateStatus(id) {
  async function updateAPI() {
    await fetch("http://localhost:3005/computational_thinking",
    {method: "PATCH",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({task_id: id})
  })
  }
  updateAPI();
}

  //function that fires when delete button clicked
  function deleteClick(id) {
    async function deleteAPI() {
      await fetch("http://localhost:3005/computational_thinking",
      {method: "DELETE",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({task_id: id})
    })
    }
    deleteAPI();
  }

  return (
    <ul id="list--container">
    {/* this maps over the current state of toDoList which should be an object inside an array
    like this [{ id: index, toDoItem: text }]. Each thing we map over we call an "item" and use dot 
    notation to access the properties of item with item.id and item.toDoItem */}
      {tasks.map(function (item) {
        
        return (
          <li className={toggleClass ? "strike" : "nonstrike"} onClick={handleToggle} key={item.task_id}>
            {item.task}
            <button
              onClick={() => {
                deleteClick(item.task_id);
              }}
              className="delete--button"
              >
              Remove
            </button>
            <input type="checkbox" onClick={() => {updateStatus(item.task_id)}}/>
          </li>
        );
      })}
    </ul>
  )
}

export default ListItem;