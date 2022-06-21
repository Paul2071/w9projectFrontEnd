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
