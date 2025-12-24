import React from 'react';

function StartScreen({ numOfQue, dispatch }) {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: "16px",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          color: "#1e293b",
        }}
      >
        🎯 Welcome to the Quiz
      </h1>

      <h2
        style={{
          fontSize: "18px",
          color: "#475569",
          fontWeight: "normal",
          maxWidth: "420px",
        }}
      >
        {numOfQue} questions to test your React mastery
      </h2>

      <button
        onClick={() => dispatch({ type: "start" })}
        style={{
          marginTop: "20px",
          padding: "12px 28px",
          fontSize: "16px",
          fontWeight: "bold",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#2563eb",
          color: "white",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        }}
      >
        🚀 Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
