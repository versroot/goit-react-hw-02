import "./Options.css";

export default function Options({ update, totalFeedback }) {
  return (
    <div>
      <button onClick={() => update("good")}>Good</button>
      <button onClick={() => update("neutral")}>Neutral</button>
      <button onClick={() => update("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={() => update("reset")}>Reset</button>
      )}
    </div>
  );
}
