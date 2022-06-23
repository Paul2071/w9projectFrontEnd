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
import { useState } from "react";
import "../App/App.css";

//the basic logic is that we create an object with the properties of
// id and toDoItem. Using index and text states, we change the properties
//of the item to our userinput (text state) and add an index+1 .
//Then map over the object rendering a <p> tag with the info we have mapped over.

function Input() {
  //toDOlist state is the string to be rendered within a <p> tag that is being added to the list.
  // Initial state is an empty array.
  // Using spread in the handleClick function we immutable the initial state
  //it and add in the variable of newItem which has two properties that
  // we change via dot notation when we map across this array at point of render

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
    console.log(text);
    async function postAPI() {
      await fetch("http://localhost:3005/computational_thinking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: text })
      });
    }
    postAPI();
  }

  //a function that fires when checkbox or list item is clicked

  return (
    <div className="input--container">
      <input
        type="text"
        onChange={handleChange}
        placeholder="Click list item to complete"
        className="input--field"
      ></input>
      <div className="button--container">
        <button onClick={handleClick} className="add-button">
          +
        </button>
      </div>
    </div>
  );
}

export default Input;
