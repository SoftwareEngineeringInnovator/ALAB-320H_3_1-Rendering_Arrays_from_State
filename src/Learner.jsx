export default function Learner({ learner }) {
  return (
    <section>
      <h2>{learner.name}</h2>
      <p>{learner.bio}</p>
    </section>
  )
}