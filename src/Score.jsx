// Displays the score and date from each learner
export default function Score({ score }) {
  return (
    <div className="score-card">
      {/* Display the date and grade for the scores */}
      <p>
        <strong>Date:</strong> {score.date}
      </p>

      <p>
        <strong>Score:</strong> {score.score}
      </p>
    </div>
  )
}