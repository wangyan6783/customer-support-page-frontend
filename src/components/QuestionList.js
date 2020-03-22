import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questionsData }) {
  return (
    <ul className="faq-question-list">
      {questionsData.map(question => (
        <QuestionItem key={question.id} questionInfo={question} />
      ))}
    </ul>
  );
}

export default QuestionList;
