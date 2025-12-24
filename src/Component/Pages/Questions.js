import React from 'react';
import Option from './Option';

function Questions({index, question, dispatch, answer }) {
  return (
    <div
      style={{
        marginTop: "24px",
        padding: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 6px 14px rgba(0,0,0,0.08)",
      }}
    >
      <h4
        style={{
          fontSize: "20px",
          fontWeight: "600",
          marginBottom: "20px",
          color: "#1e293b",
        }}
      >
       {index+1}. {question.question}
      </h4>

      <Option
        question={question}
        dispatch={dispatch}
        answer={answer}
      />
    </div>
  );
}

export default Questions;
