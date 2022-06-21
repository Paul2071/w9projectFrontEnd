/*
Plan
  This component renders a <h2> of the week the user is viewing e.g. Week1
*/

/*
Code
  <h3> tag dependant on styling requirements
  Hard code for now (functionality will scale to be dynamic: e.g. week 1, week 2)
*/

import React from "react";

function WeekBar() {
  return (
    <div className="weekbar--container">
      <h2 className="week--header">Week 1</h2>
    </div>
  );
}

export default WeekBar;
