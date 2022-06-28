import React from "react";

function Resources({linkToResource}) {
  return (
    <div className="resources">
      <a
        href={linkToResource}
        target="_blank"
        rel="noreferrer"
      >
        View Resources
      </a>
    </div>
  );
}

export default Resources;
