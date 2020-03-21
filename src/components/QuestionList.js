import React from "react";
import questionsData from "../data/questions-data";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  return (
    <ul className="faq-question-list">
      {questionsData.map(question => (
        <QuestionItem key={question.id} questionInfo={question} />
      ))}
    </ul>
  );
}

export default QuestionList;
