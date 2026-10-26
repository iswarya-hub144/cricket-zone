
import { useEffect, useState } from "react";
import LiveScores from "./LiveScores.jsx";
export default function LiveScores() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/live-scores")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Scores load aagala");
        }
        return res.json();
      })
      .then((result) => {
        setMatches(result.data?.fixtures || []);
      })
      .catch(() => {
        setError("Backend server check pannu!");
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

      {matches.length === 0 && !loading && !error && (
        <p>No live matches available.</p>
      )}

      {matches.map((match) => (
        <div key={match.fixture_id}>
          <h3>
            {match.home_team?.team_name} VS{" "}
            {match.away_team?.team_name}
          </h3>
          <p>{match.home_team?.score}</p>
          <p>{match.away_team?.score}</p>
          <p>{match.fixture_status}</p>
          <hr />
        </div>
      ))}
    </section>
  );
}
