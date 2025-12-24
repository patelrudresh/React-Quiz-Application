import React from 'react';
import '../Pages/css/option.css'
function Option({ question, dispatch, answer }) {
  return (
    <div className="options-vertical">
      {question.options.map((option, index) => (
        <button
          key={index}
          className={`btn option
            ${index === answer ? "answer" : ""}
            ${answer !== null && index === question.correctOption ? "correct" : ""}
            ${answer !== null &&
              index === answer &&
              index !== question.correctOption
              ? "wrong"
              : ""}
          `}
          disabled={answer !== null}
          onClick={() =>
            dispatch({ type: "newAnswer", payload: index })
          }
        >
          {option}
          {answer !== null && index === question.correctOption && " ✅"}
          {answer !== null &&
            index === answer &&
            index !== question.correctOption &&
            " ❌"}
        </button>
      ))}
    </div>
  );
}
export default Option