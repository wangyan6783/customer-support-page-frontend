import React from "react";
import questionsData from "../data/questions";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  return (
    <ul className="faq-question">
      {questionsData.map(question => (
        <QuestionItem key={question.id} questionInfo={question} />
      ))}
    </ul>
  );
}

export default QuestionList;
