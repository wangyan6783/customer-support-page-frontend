import React from "react";
import Directory from "../components/Directory";
import MainHeader from "../components/MainHeader";
import CategoryList from "../components/CategoryList";
import FAQ from "../components/FAQ";

function CustomerSupportPage() {
  return (
    <div className="customer-support-page">
      <Directory main="Home" sub="Customer Support" />
      <MainHeader />
      <CategoryList />
      <FAQ />
    </div>
  );
}

export default CustomerSupportPage;
