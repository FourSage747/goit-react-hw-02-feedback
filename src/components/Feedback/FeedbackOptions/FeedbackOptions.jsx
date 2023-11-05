export const FeedbackOptions = ({ good, neutral, bad}) => {
  return (
    <ul>
      <li>
        <button onClick={good}>Good</button>
      </li>
      <li>
        <button onClick={neutral}>Neutral</button>
      </li>
      <li>
        <button onClick={bad}>Bad</button>
      </li>
    </ul>
  );
};
