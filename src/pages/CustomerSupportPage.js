import React from "react";
import Directory from "../components/Directory";
import Header from "../components/Header";
import CategoryList from "../components/CategoryList";
import FAQ from "../components/FAQ";

function CustomerSupportPage() {
  return (
    <React.Fragment>
      <Directory />
      <Header />
      <CategoryList />
      <FAQ />
    </React.Fragment>
  );
}

export default CustomerSupportPage;
