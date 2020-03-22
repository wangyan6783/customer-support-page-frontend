import React from "react";
import Directory from "../components/Directory";
import MainHeader from "../components/MainHeader";
import CategoryList from "../components/CategoryList";
import FAQ from "../components/FAQ";
import directoryContent from "../data/directory-content";
import mainHeaderContent from "../data/main-header-content";
import categoriesData from "../data/categories-data";

function CustomerSupportPage() {
  return (
    <div>
      <Directory directoryContent={directoryContent} />
      <MainHeader mainHeaderContent={mainHeaderContent} />
      <CategoryList categoriesData={categoriesData} />
      <FAQ />
    </div>
  );
}

export default CustomerSupportPage;
