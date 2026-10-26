import { useEffect, useState } from "react";

export default function LiveScores() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/live-scores")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load scores");
        }
        return response.json();
      })
      .then((result) => {
        setMatches(result.data?.fixtures || []);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <h2>🏏 Live Cricket Scores</h2>

      {loading && <p>Loading scores...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && matches.length === 0 && (
        <p>No live matches available right now.</p>
      )}

      {matches.map((match) => (
        <article key={match.fixture_id}>
          <h3>
            {match.home_team?.team_name} VS{" "}
            {match.away_team?.team_name}
          </h3>
          <p>{match.home_team?.score ?? "Yet to bat"}</p>
          <p>{match.away_team?.score ?? "Yet to bat"}</p>
          <p>{match.fixture_status}</p>
          <hr />
        </article>
      ))}
    </section>
  );
}
