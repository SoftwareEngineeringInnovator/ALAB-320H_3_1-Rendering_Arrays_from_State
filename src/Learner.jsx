// Import the Score from each learner
import Score from './Score'

// Learner function
export default function Learner({ learner }) {
  return (
    <section className="learner-card">
      {/* Display the learner's name and biography */}
      <h2>{learner.name}</h2>
      <p>{learner.bio}</p>

      <h3>Scores</h3>

    <div className="score-list">
      {/* We go through the learner's scores array and create one Score
          component for every score object */}
      {learner.scores.map((score) => (
        <Score
          key={score.date}
          score={score}
        />
      ))}
      </div>
    </section>
  )
}