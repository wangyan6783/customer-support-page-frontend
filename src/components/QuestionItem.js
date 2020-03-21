import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function QuestionItem({ questionInfo: { question, answer } }) {
  const [showAnswer, setShowAnswer] = useState(false);

  function handleShowAnswer() {
    setShowAnswer(!showAnswer);
  }

  return (
    <li className="faq-question-item" onClick={handleShowAnswer}>
      <FontAwesomeIcon
        className="faq-question-icon"
        icon={showAnswer ? "minus" : "plus"}
      />
      <div>
        <h4 className="faq-question-title">{question}</h4>
        <p className="faq-question-answer">{showAnswer && answer}</p>
      </div>
    </li>
  );
}

export default QuestionItem;
