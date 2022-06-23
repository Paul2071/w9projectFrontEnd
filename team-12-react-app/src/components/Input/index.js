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



function Input({fetchAPI, lesson}) {

  const [text, setText] = useState("");

  //a function that captures the user input in the input field
  function handleChange(e) {
    setText(e.target.value);
  }


   //a function that fires when "add to list" button clicked.
   function handleClick() {
    async function postAPI() {
      await fetch("http://localhost:3005/user_table",
      {method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({task: text, topic : lesson})
    })
    }
    fetchAPI();
    postAPI();
    fetchAPI();
  }



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
