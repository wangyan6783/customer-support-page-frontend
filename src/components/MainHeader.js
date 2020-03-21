import React from "react";
import mainHeaderContent from "../data/main-header-content";

function MainHeader() {
  return (
    <header className="main-header">
      <p className="uppercase padding-b-3">{mainHeaderContent.subTitle}</p>
      <h1 className="padding-b-3">{mainHeaderContent.title}</h1>
      <p className="sub-text padding-b-3">{mainHeaderContent.content}</p>
    </header>
  );
}

export default MainHeader;
