import './Scorecard.css'

const innings = [
  { name: 'Team A', score: '178/5', overs: '20.0 overs' },
  { name: 'Team B', score: '162/8', overs: '20.0 overs' },
]

function Scorecard() {
  return (
    <section className="scorecard">
      <p className="scorecard-tag">MATCH SNAPSHOT</p>
      <h2>Cricket <span>Scorecard</span></h2>
      <p className="scorecard-note">Sample scorecard for the website demo — not a live match result.</p>
      <div className="scorecard-grid">
        {innings.map((team) => (
          <article className="scorecard-card" key={team.name}>
            <p className="innings-label">{team.name}</p>
            <p className="innings-score">{team.score}</p>
            <p className="innings-overs">{team.overs}</p>
          </article>
        ))}
      </div>
      <div className="scorecard-result">Sample result: Team A won by 16 runs</div>
    </section>
  )
}

export default Scorecard
