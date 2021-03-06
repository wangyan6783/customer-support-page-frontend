import React from "react";

function FAQHeader({ faqHeaderContent }) {
  return (
    <header className="faq-header">
      <div className="faq-header-section-1">
        <p className="uppercase padding-b-2">{faqHeaderContent.subTitle}</p>
        <h1>{faqHeaderContent.title1}</h1>
        <h1>{faqHeaderContent.title2}</h1>
      </div>
      <a href="/customer-support-page-frontend/" className="main-link-text">
        {faqHeaderContent.link}
      </a>
    </header>
  );
}

export default FAQHeader;
