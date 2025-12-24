import React from 'react';

function NextButton({ dispatch, answer }) {
  if (answer === null) return null;

  return (
    <div
      style={{
        marginTop: "24px",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        style={{
          padding: "10px 26px",
          fontSize: "15px",
          fontWeight: "bold",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#2563eb",
          color: "white",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        }}
      >
        Next ➡️
      </button>
    </div>
  );
}

export default NextButton;
