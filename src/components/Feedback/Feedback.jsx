import css from "./Feedback.module.css";

export default function Feedback({ values, totalFeedback, positiveFeedback }) {
  return (
    <div className={css.feedback}>
      <ul>
        <li>Good: {values.good}</li>
        <li>Neutral: {values.neutral}</li>
        <li>Bad: {values.bad}</li>
        <li>Total: {totalFeedback} </li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
}
