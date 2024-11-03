import React from "react";

export default function Feedback({ values, totalFeedback }) {
  return (
    <div className="feedback">
      <h2>Feedback</h2>
      <p>
        Good: {values.good}, Neutral: {values.neutral}, Bad: {values.bad},
        Total: {totalFeedback}, Positive:{" "}
        {Math.round((values.good / totalFeedback) * 100)}%
      </p>
    </div>
  );
}
