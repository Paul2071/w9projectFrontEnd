import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

//stars is imported from the library referenced above and functions in the way the library creators intended
function Stars() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="stars">
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        className="single-stars"
      />
    </div>
  );
}

export default Stars;
