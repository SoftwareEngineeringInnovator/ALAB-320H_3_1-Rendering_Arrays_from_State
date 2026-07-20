// Displays the score and date from each learner
export default function Score({ score }) {
  return (
    <div>
      {/* Display information from one score */}
      <p>Date: {score.date}</p>
      <p>Score: {score.score}</p>
    </div>
  )
}