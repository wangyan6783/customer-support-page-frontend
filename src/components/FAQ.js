import React from "react";
import FAQHeader from "./FAQHeader";
import QuestionList from "./QuestionList";
import faqHeaderContent from "../data/faq-header-content";
import questionsData from "../data/questions-data";

function FAQ() {
  return (
    <section className="faq">
      <FAQHeader faqHeaderContent={faqHeaderContent} />
      <QuestionList questionsData={questionsData} />
    </section>
  );
}

export default FAQ;
