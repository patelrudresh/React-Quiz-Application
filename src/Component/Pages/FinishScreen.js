import React from 'react';

function FinishScreen({ dispatch, points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: "20px",
          fontWeight: "500",
          color: "#1e293b",
        }}
      >
        🎉 You scored{" "}
        <em style={{ fontWeight: "bold", color: "#2563eb" }}>
          {points}
        </em>{" "}
        out of {maxPossiblePoints}
      </p>

      <p
        style={{
          fontSize: "18px",
          color: "#475569",
        }}
      >
        Your score:{" "}
        <strong>{Math.ceil(percentage)}%</strong>
      </p>

      <button
        onClick={() => dispatch({ type: "restart" })}
        style={{
          marginTop: "20px",
          padding: "12px 30px",
          fontSize: "16px",
          fontWeight: "bold",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#16a34a",
          color: "white",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        }}
      >
        🔄 Restart Quiz
      </button>
    </div>
  );
}

export default FinishScreen;
