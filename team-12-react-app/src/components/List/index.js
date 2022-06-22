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

  function handleToggle (event) {
    //toggleClass state is to toggle CSS class and is used with our checkbox and its 
  //onclick event. Not 100% working as it toggles ALL of the list.



  //toggles css class of the list item - not 100% as it toggles
  //for all of the items. Commented out as not best use, may be useful later.
 // toggleClass ? setToggleClass(false) : setToggleClass(true)
  
  //changes the styling of the item clicked in this case, toggling strikethrough
  if (event.target.style.textDecoration) {
    event.target.style.removeProperty('text-decoration');
  } else {
    event.target.style.setProperty('text-decoration', 'line-through');
  }

}

  //function that fires when delete button clicked
  function deleteClick(idValue) {
    setToDoList(toDoList.filter((item) => item.id !== idValue));
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
                deleteClick(item.id);
              }}
              className="delete--button"
              >
              Remove
            </button>
            <input type="checkbox" onClick={handleToggle}/>
          </li>
        );
      })}
    </ul>
  )
}

export default ListItem;