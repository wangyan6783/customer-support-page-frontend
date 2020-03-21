import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function QuestionItem({ questionInfo: { question, answer } }) {
  const [showAnswer, setShowAnswer] = useState(false);

  function handleShowAnswer() {
    setShowAnswer(!showAnswer);
  }

  return (
    <li>
      <FontAwesomeIcon
        icon={showAnswer ? "minus" : "plus"}
        onClick={handleShowAnswer}
      />
      <h4>{question}</h4>
      <p>{showAnswer && answer}</p>
    </li>
  );
}

export default QuestionItem;
