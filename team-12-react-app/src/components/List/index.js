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
import "../App/App.css";

function ListItem({ tasks, fetchAPI }) {
  // event.target.style.textDecoration
  //className={toggleClass ? "strike" : "nonstrike"} onClick={handleToggle}

  //   function handleToggle (event, {tasks}) {
  //   if (tasks.is_complete === false) {
  //     event.target.style.removeProperty('text-decoration');
  //   } else {
  //     event.target.style.setProperty('text-decoration', 'line-through');
  //   }
  // }

  //function to change boolean value of is_completed column in DB
  function updateStatus(id) {
    async function updateAPI() {
      await fetch("http://localhost:3005/user_table", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task_id: id })
      });
    }
    fetchAPI();
    updateAPI();
    fetchAPI();
  }

  //function that fires when delete button clicked
  function deleteClick(id) {
    async function deleteAPI() {
      await fetch("http://localhost:3005/user_table", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task_id: id })
      });
    }
    fetchAPI();
    deleteAPI();
    fetchAPI();
  }

  return (
    <ul id="list--container">
      {tasks.map(function (item) {
        return (
          <li key={item.task_id} className="li-item">
            <label class="container">
              <input
                className="checkbox"
                type="checkbox"
                onClick={() => {
                  updateStatus(item.task_id);
                }}
              />
              <span class="checkmark"></span>
            </label>

            <div className="li-input-text">{item.task}</div>

            <div>
              <button
                onClick={() => {
                  deleteClick(item.task_id);
                }}
                className="delete--button"
              >
                X
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ListItem;
