import React from "react";

function Directory({ main, sub }) {
  return (
    <div className="directory">
      <a href="#" className="main-link-text">
        {main}
      </a>
      <p className="sub-text inline">{` / ${sub}`}</p>
    </div>
  );
}

export default Directory;
