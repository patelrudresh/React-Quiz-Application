import React from 'react';

function Error() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fee2e2",
          color: "#991b1b",
          padding: "20px 28px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          textAlign: "center",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>
          ⚠️ Oops!
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
          There was some error while fetching questions.
          <br />
          Please try again later.
        </p>
      </div>
    </div>
  );
}

export default Error;
