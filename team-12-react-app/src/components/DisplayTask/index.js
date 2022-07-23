import React from "react";


function DisplayTask({tasks, fetchAPI, topic}){

  function changeCompletedStatusDatabase(id) {

    async function updateAPI() {
      const response = await fetch("http://localhost:3005/user_table", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task_id: id })
      });
      const data = await response.json()
      console.log(data.payload.command)
    }

    //fetchAPI called around updateAPI to counter updateAPI function only updating database and not updating state when called
    fetchAPI();
    updateAPI();
    fetchAPI();
  }




    async function deleteAPI(id) {
      const response = await fetch("http://localhost:3005/user_table", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task_id: id })
      });
      const data = await response.json()
      .then (fetchAPI())
       console.log(data.payload.command)
    }

  

  return (
    <ul id="list--container">
      {tasks.map(function (item) {
/* line 43 logic filters state and displays only the tasks where the column of topic in the database matches the hardcoded topic at App level */
        return  item.topic === topic && (
          <li key={item.task_id} className="li-item">
            <label class="container">
              <input
                className="checkbox"
                type="checkbox"
                onClick={() => {changeCompletedStatusDatabase(item.task_id);}}/>
              <span class="checkmark"></span>
            </label>

            <div className="li-input-text">{item.task}</div>

            <div>
              <button
                onClick={() => {deleteAPI(item.task_id);}}
                className="delete--button">X</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default DisplayTask
