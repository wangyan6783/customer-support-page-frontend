import React from "react";

function Directory({ directoryContent }) {
  return (
    <div className="directory">
      <a href="/customer-support-page-frontend/" className="main-link-text">
        {directoryContent.mainDirectory}
      </a>
      <p className="sub-text inline">{` / ${directoryContent.subDirectory}`}</p>
    </div>
  );
}

export default Directory;
