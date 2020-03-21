import React from "react";

function Directory({ main, sub }) {
  return (
    <p>
      <span>{main}</span> / {sub}
    </p>
  );
}

export default Directory;
