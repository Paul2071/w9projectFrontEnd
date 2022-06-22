/*
Plan
  This component will render 5 stars as images / icons
  The functionality to set an amount of stars will be coded once main App functionality works
    - The stars when coded will go from unfilled to filled onClick and backend functionality will follow
*/

/*
Code
- hard code 5 star images for demonstrative purposes: hard code once direction decided 

- User logs into account
- see 5 stars greyed out and prompt to "rate proficiency"
- user clicks star to set proficiency level 
- proficiency saved between sessions can be set by clicking any star - filling in stars before it

- backend will have star value starting at 0
when user loads the page GET request to dislay stars based on current star value
  (starting at zero or based on the number they left it at prior)
- when user clicks a star a post request will be sent to back-end with star value
- immediately sends a GET request to display number of stars based on value given 


*/

import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function Stars() {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // Some logic
  };

  return (
    <div className="stars">
      <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
    </div>
  );
}

export default Stars;
