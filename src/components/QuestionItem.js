import React from "react";

function QuestionItem({ question, handleDelete,newCorrectanswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select  defaultValue={correctIndex} onChange={(e) =>newCorrectanswer(id,parseInt(e.target.value))}>{options}</select>
      </label>
      <button value={id} onClick={(e) => handleDelete(e.target.value)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
