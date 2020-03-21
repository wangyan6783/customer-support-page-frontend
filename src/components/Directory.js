import React from "react";
import directoryContent from "../data/directory-content";

function Directory() {
  return (
    <div className="directory">
      <a href="#" className="main-link-text">
        {directoryContent.mainDirectory}
      </a>
      <p className="sub-text inline">{` / ${directoryContent.subDirectory}`}</p>
    </div>
  );
}

export default Directory;
