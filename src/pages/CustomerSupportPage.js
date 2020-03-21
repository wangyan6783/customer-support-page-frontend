import React from "react";
import Directory from "../components/Directory";
import MainHeader from "../components/MainHeader";
import CategoryList from "../components/CategoryList";
import FAQ from "../components/FAQ";

function CustomerSupportPage() {
  return (
    <React.Fragment>
      <Directory main="Home" sub="Customer Support" />
      <MainHeader />
      <CategoryList />
      <FAQ />
    </React.Fragment>
  );
}

export default CustomerSupportPage;
