/*
Plan
  This component should take text entry from a user through an <input> tag
  This component will also feature a  + button
    - when + button is clicked populate list with <li> tag containing user input value
*/

/*
Code
 - It needs a state
 - State will be made up of users input value
  - const [state, setState] = useState("");

  - Input requires a handleChange listener
    - State will be updated on each character typed
    
  Button:
    - requires an onClick even listener
      - will envoke a function that renders List Component with the state of the Input
      - send POST request to backend table with the same content 

*/

import React from "react";
import { useState } from "react"
import "../App/App.css"

//the basic logic is that we create an object with the properties of 
// id and toDoItem. Using index and text states, we change the properties 
//of the item to our userinput (text state) and add an index+1 .
//Then map over the object rendering a <p> tag with the info we have mapped over.



function Input({tasks}) {
  console.log(tasks)
  //toggleClass state is to toggle CSS class and is used with our checkbox and its 
  //onclick event. Not 100% working as it toggles ALL of the list.
  const [toggleClass, setToggleClass] = useState(false);
  //toDOlist state is the string to be rendered within a <p> tag that is being added to the list.
  // Initial state is an empty array.
  // Using spread in the handleClick function we immutable the initial state
  //it and add in the variable of newItem which has two properties that 
  // we change via dot notation when we map across this array at point of render
  const [toDoList, setToDoList] = useState([]);
  //text state is the string the user types into the input field
  //we use the text state to set the propery of toDoItem
  const [text, setText] = useState("");
  //index state is used to set the id property of toDoList and ensure 
  //that each entry has a unique key - not 100% effective as key only unique
  //in local host
  const [index, setIndex] = useState(0);


  //a function that captures the user input in the input field
  function handleChange(e) {
    setText(e.target.value);
     }

   //a function that fires when "add to list" button clicked.
   function handleClick() {
     // sets the index state to +1 of what it was ensuring unique key id 
     //  this technqiue only works for the localhost session
     setIndex(index + 1);
     //new variable made up of the properties id and toDoItem with they 
     //key value pairs of the state "index" and "text"
    const newItem = { id: index, toDoItem: text };
    //immutably change the initial state of [] to [{ id: index, toDoItem: text }]
    setToDoList([...toDoList, newItem]);
     }


     //a function that fires when checkbox or list item is clicked
  function handleToggle (event) {
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
    <div className="input--container">
      <input
        type="text"        
        onChange={handleChange}
        placeholder="Click list item to complete"
        className="input--field"
      ></input>
      <button onClick={handleClick}>Add to list</button>
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
              <input type="checkbox" onClick={handleToggle}></input>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Input;
