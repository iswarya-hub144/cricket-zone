import { useEffect, useState } from "react";

const API =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

const TEAMS = [
  {
    name: "Chennai Super Kings",
    short: "CSK",
    color: "#F9CD05",
    dark: "#172554",
    logo: "https://www.iplt20.com/api/team-assets?pathname=static%2Fteams%2F1622%2Ficon-light.svg",
    batters: [
      { name: "Ruturaj Gaikwad", no: 31 },
      { name: "MS Dhoni", no: 7 },
      { name: "Sanju Samson", no: 9 },
      { name: "Dewald Brevis", no: 17 },
    ],
    bowlers: [
      { name: "Khaleel Ahmed", no: 13 },
      { name: "Rahul Chahar", no: 28 },
      { name: "Mukesh Choudhary", no: 65 },
      { name: "Noor Ahmad", no: 10 },
    ],
    allRounders: [
      { name: "Shivam Dube", no: 25 },
      { name: "Ravindra Jadeja", no: 8 },
    ],
  },
  {
    name: "Mumbai Indians",
    short: "MI",
    color: "#0876D1",
    dark: "#092957",
    logo: "https://www.iplt20.com/api/team-assets?pathname=static%2Fteams%2F1854%2Ficon-light.svg",
    batters: [
      { name: "Rohit Sharma", no: 45 },
      { name: "Suryakumar Yadav", no: 63 },
      { name: "Tilak Varma", no: 9 },
      { name: "Ryan Rickelton", no: 67 },
    ],
    bowlers: [
      { name: "Jasprit Bumrah", no: 93 },
      { name: "Trent Boult", no: 18 },
      { name: "Deepak Chahar", no: 90 },
      { name: "Mitchell Santner", no: 74 },
    ],
    allRounders: [
      { name: "Hardik Pandya", no: 33 },
      { name: "Naman Dhir", no: 18 },
    ],
  },
  {
    name: "Royal Challengers Bengaluru",
    short: "RCB",
    color: "#D71920",
    dark: "#351017",
    logo: "https://www.iplt20.com/api/team-assets?pathname=static%2Fteams%2F2138%2Ficon-light.svg",
    batters: [
      { name: "Virat Kohli", no: 18 },
      { name: "Rajat Patidar", no: 97 },
      { name: "Phil Salt", no: 61 },
      { name: "Devdutt Padikkal", no: 4 },
    ],
    bowlers: [
      { name: "Josh Hazlewood", no: 38 },
      { name: "Bhuvneshwar Kumar", no: 15 },
      { name: "Yash Dayal", no: 13 },
      { name: "Rasikh Dar", no: 11 },
    ],
    allRounders: [
      { name: "Krunal Pandya", no: 25 },
      { name: "Venkatesh Iyer", no: 19 },
    ],
  },
  {
    name: "Kolkata Knight Riders",
    short: "KKR",
    color: "#8B4BC2",
    dark: "#24123E",
    logo: "https://www.iplt20.com/api/team-assets?pathname=static%2Fteams%2F1873%2Ficon-light.svg",
    batters: [
      { name: "Rinku Singh", no: 12 },
      { name: "Ajinkya Rahane", no: 27 },
      { name: "Angkrish Raghuvanshi", no: 80 },
      { name: "Manish Pandey", no: 9 },
    ],
    bowlers: [
      { name: "Varun Chakravarthy", no: 29 },
      { name: "Harshit Rana", no: 22 },
      { name: "Vaibhav Arora", no: 27 },
      { name: "Anrich Nortje", no: 40 },
    ],
    allRounders: [
      { name: "Sunil Narine", no: 74 },
      { name: "Andre Russell", no: 12 },
    ],
  },
  {
    name: "Sunrisers Hyderabad",
    short: "SRH",
    color: "#F26522",
    dark: "#411809",
    logo: "https://www.iplt20.com/api/team-assets?pathname=static%2Fteams%2F1153%2Ficon-light.svg",
    batters: [
      { name: "Travis Head", no: 62 },
      { name: "Abhishek Sharma", no: 4 },
      { name: "Ishan Kishan", no: 23 },
      { name: "Heinrich Klaasen", no: 45 },
    ],
    bowlers: [
      { name: "Pat Cummins", no: 30 },
      { name: "Mohammed Shami", no: 11 },
      { name: "Harshal Patel", no: 36 },
      { name: "Jaydev Unadkat", no: 20 },
    ],
    allRounders: [
      { name: "Nitish Kumar Reddy", no: 41 },
      { name: "Kamindu Mendis", no: 24 },
    ],
  },
  {
    name: "Rajasthan Royals",
    short: "RR",
    color: "#F0449B",
    dark: "#32112D",
    logo: "https://www.iplt20.com/api/team-assets?pathname=static%2Fteams%2F1558%2Ficon-light.svg",
    batters: [
      { name: "Yashasvi Jaiswal", no: 19 },
      { name: "Sanju Samson", no: 9 },
      { name: "Dhruv Jurel", no: 6 },
      { name: "Shimron Hetmyer", no: 189 },
    ],
    bowlers: [
      { name: "Jofra Archer", no: 22 },
      { name: "Sandeep Sharma", no: 66 },
      { name: "Tushar Deshpande", no: 96 },
      { name: "Maheesh Theekshana", no: 61 },
    ],
    allRounders: [
      { name: "Riyan Parag", no: 3 },
      { name: "Wanindu Hasaranga", no: 49 },
    ],
  },
  {
    name: "Delhi Capitals",
    short: "DC",
    color: "#2563EB",
    dark: "#111D49",
    logo: "https://www.iplt20.com/api/team-assets?pathname=static%2Fteams%2F1396%2Ficon-light.svg",
    batters: [
      { name: "KL Rahul", no: 1 },
      { name: "Abishek Porel", no: 29 },
      { name: "Tristan Stubbs", no: 4 },
      { name: "Jake Fraser-McGurk", no: 10 },
    ],
    bowlers: [
      { name: "Kuldeep Yadav", no: 23 },
      { name: "Mitchell Starc", no: 56 },
      { name: "Mukesh Kumar", no: 49 },
      { name: "T Natarajan", no: 11 },
    ],
    allRounders: [
      { name: "Axar Patel", no: 20 },
      { name: "Vipraj Nigam", no: 54 },
    ],
  },
  {
    name: "Punjab Kings",
    short: "PBKS",
    color: "#E11D48",
    dark: "#3A1025",
    logo: "https://www.iplt20.com/api/team-assets?pathname=static%2Fteams%2F2040%2Ficon-light.svg",
    batters: [
      { name: "Shreyas Iyer", no: 96 },
      { name: "Prabhsimran Singh", no: 84 },
      { name: "Priyansh Arya", no: 18 },
      { name: "Josh Inglis", no: 72 },
    ],
    bowlers: [
      { name: "Arshdeep Singh", no: 2 },
      { name: "Yuzvendra Chahal", no: 3 },
      { name: "Lockie Ferguson", no: 69 },
      { name: "Marco Jansen", no: 70 },
    ],
    allRounders: [
      { name: "Marcus Stoinis", no: 17 },
      { name: "Glenn Maxwell", no: 32 },
    ],
  },
  {
    name: "Gujarat Titans",
    short: "GT",
    color: "#4B90A6",
    dark: "#102B43",
    logo: "https://www.iplt20.com/api/team-assets?pathname=static%2Fteams%2F2879%2Ficon-light.svg",
    batters: [
      { name: "Shubman Gill", no: 77 },
      { name: "Sai Sudharsan", no: 66 },
      { name: "Jos Buttler", no: 63 },
      { name: "Sherfane Rutherford", no: 50 },
    ],
    bowlers: [
      { name: "Rashid Khan", no: 19 },
      { name: "Mohammed Siraj", no: 73 },
      { name: "Prasidh Krishna", no: 24 },
      { name: "Ishant Sharma", no: 97 },
    ],
    allRounders: [
      { name: "Rahul Tewatia", no: 14 },
      { name: "Washington Sundar", no: 5 },
    ],
  },
  {
    name: "Lucknow Super Giants",
    short: "LSG",
    color: "#20B9C7",
    dark: "#092D42",
    logo: "https://www.iplt20.com/api/team-assets?pathname=static%2Fteams%2F2880%2Ficon-light.svg",
    batters: [
      { name: "Rishabh Pant", no: 17 },
      { name: "Nicholas Pooran", no: 29 },
      { name: "Aiden Markram", no: 4 },
      { name: "Mitchell Marsh", no: 8 },
    ],
    bowlers: [
      { name: "Mayank Yadav", no: 1 },
      { name: "Ravi Bishnoi", no: 56 },
      { name: "Avesh Khan", no: 65 },
      { name: "Mohsin Khan", no: 15 },
    ],
    allRounders: [
      { name: "Abdul Samad", no: 5 },
      { name: "Shahbaz Ahmed", no: 21 },
    ],
  },
];

const QUIZ = [
  {
    q: "How many players are there in one cricket team on the field?",
    options: ["9", "10", "11", "12"],
    answer: "11",
  },
  {
    q: "What does IPL stand for?",
    options: [
      "Indian Premier League",
      "International Player League",
      "Indian Players League",
      "International Premier League",
    ],
    answer: "Indian Premier League",
  },
  {
    q: "Which number is associated with Hardik Pandya in this app?",
    options: ["7", "18", "33", "45"],
    answer: "33",
  },
];

function displayTeamName(name) {
  if (!name || name === "TBC" || /^[A-Z]\d+$/.test(name)) {
    return "Team to be confirmed";
  }
  return name;
}

function getFixtures(json) {
  const data = json?.data;
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.fixtures)) return data.fixtures;
  if (Array.isArray(json?.fixtures)) return json.fixtures;
  return [];
}

function matchDate(value) {
  if (!value) return "Date to be announced";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Date to be announced";

  return date.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });
}

function TeamLogo({ team, size = 84 }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [team.logo]);

  return (
    <div
      className="team-logo"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(145deg, ${team.color}, ${team.dark})`,
      }}
    >
      {!failed && team.logo ? (
        <img
          src={team.logo}
          alt={`${team.name} logo`}
          onError={() => setFailed(true)}
        />
      ) : (
        <span>{team.short}</span>
      )}
    </div>
  );
}

function App() {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [category, setCategory] = useState("batters");
  const [search, setSearch] = useState("");
  const [favourite, setFavourite] = useState(
    () => localStorage.getItem("cricketFavourite") || ""
  );

  const [liveFixtures, setLiveFixtures] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [liveLoading, setLiveLoading] = useState(true);
  const [scheduleLoading, setScheduleLoading] = useState(true);
  const [liveError, setLiveError] = useState("");
  const [scheduleError, setScheduleError] = useState("");

  const [questionIndex, setQuestionIndex] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadLiveScores() {
      try {
        setLiveLoading(true);
        setLiveError("");

        const response = await fetch(`${API}/api/live-scores`);
        if (!response.ok) throw new Error("Live score API unavailable");

        const json = await response.json();
        if (active) setLiveFixtures(getFixtures(json));
      } catch {
        if (active) {
          setLiveFixtures([]);
          setLiveError(
            "Live scores are currently unavailable. Check that the backend is running."
          );
        }
      } finally {
        if (active) setLiveLoading(false);
      }
    }

    async function loadSchedule() {
      try {
        setScheduleLoading(true);
        setScheduleError("");

        const response = await fetch(`${API}/api/match-schedule`);
        if (!response.ok) throw new Error("Schedule API unavailable");

        const json = await response.json();
        if (active) setSchedule(getFixtures(json));
      } catch {
        if (active) {
          setSchedule([]);
          setScheduleError(
            "Match schedule is unavailable. Check the backend and API connection."
          );
        }
      } finally {
        if (active) setScheduleLoading(false);
      }
    }

    loadLiveScores();
    loadSchedule();

    return () => {
      active = false;
    };
  }, []);

  const filteredTeams = TEAMS.filter((team) =>
    `${team.name} ${team.short}`.toLowerCase().includes(search.toLowerCase())
  );

  function saveFavourite(team) {
    const next = favourite === team.short ? "" : team.short;
    setFavourite(next);

    if (next) {
      localStorage.setItem("cricketFavourite", next);
    } else {
      localStorage.removeItem("cricketFavourite");
    }
  }

  function startQuizAgain() {
    setQuestionIndex(0);
    setQuizAnswer("");
    setQuizScore(0);
    setQuizFinished(false);
  }

  function submitAnswer() {
    if (!quizAnswer) return;

    const correct = quizAnswer === QUIZ[questionIndex].answer;
    const newScore = quizScore + (correct ? 1 : 0);
    setQuizScore(newScore);

    if (questionIndex === QUIZ.length - 1) {
      setQuizFinished(true);
    } else {
      setQuestionIndex(questionIndex + 1);
      setQuizAnswer("");
    }
  }

  function findTeam(name) {
    if (!name) return null;
    return TEAMS.find(
      (team) =>
        team.name.toLowerCase() === String(name).toLowerCase() ||
        team.short.toLowerCase() === String(name).toLowerCase()
    );
  }

  function renderFixtureTeam(fixture, side) {
    const teamObj = fixture?.[`${side}_team`];
    const name =
      typeof teamObj === "string"
        ? teamObj
        : teamObj?.team_name || teamObj?.name || fixture?.[`${side}_team_name`];

    const knownTeam = findTeam(name);

    return (
      <div className="fixture-team">
        {knownTeam && <TeamLogo team={knownTeam} size={38} />}
        <span>{displayTeamName(name)}</span>
      </div>
    );
  }

  function renderScore(fixture, side) {
    const value =
      fixture?.[`${side}_team_score`] ??
      fixture?.[`${side}_score`] ??
      fixture?.[`${side}_runs`] ??
      fixture?.[`${side}_team`]?.score;

    return value === undefined || value === null || value === ""
      ? "Score unavailable"
      : String(value);
  }

  return (
    <div className="app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap');

        :root {
          font-family: 'DM Sans', sans-serif;
          color: #172033;
          background: #f5f7ff;
          scroll-behavior: smooth;
        }

        * { box-sizing: border-box; }

        body {
          margin: 0;
          min-width: 320px;
          background: #f5f7ff;
        }

        button, input { font: inherit; }

        button { cursor: pointer; }

        .app {
          min-height: 100vh;
          background:
            radial-gradient(circle at 3% 5%, #e7ecff 0, transparent 27%),
            radial-gradient(circle at 96% 25%, #ffe6ec 0, transparent 24%),
            #f7f8fc;
        }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 16px 6%;
          background: rgba(255,255,255,.94);
          border-bottom: 1px solid #e8eaf1;
          backdrop-filter: blur(14px);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font: 800 24px 'Outfit', sans-serif;
          color: #172554;
          white-space: nowrap;
        }

        .brand-ball {
          display: grid;
          place-items: center;
          width: 42px;
          height: 42px;
          border-radius: 14px;
          background: #172554;
          color: #fff;
        }

        .nav-links {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
        }

        .nav-links a {
          color: #475569;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
        }

        .nav-links a:hover { color: #2563eb; }

        .hero {
          position: relative;
          overflow: hidden;
          margin: 28px auto 38px;
          max-width: 1240px;
          width: 90%;
          min-height: 315px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          padding: 45px 6%;
          border-radius: 30px;
          background: linear-gradient(115deg, #101e49, #2447a2 70%, #3869cb);
          color: white;
          box-shadow: 0 20px 50px #233e781e;
        }

        .hero::after {
          content: '🏏';
          position: absolute;
          right: 6%;
          top: 12%;
          font-size: clamp(100px, 17vw, 205px);
          opacity: .16;
          transform: rotate(-18deg);
          pointer-events: none;
        }

        .hero-content { position: relative; z-index: 1; }

        .eyebrow {
          display: inline-flex;
          padding: 7px 12px;
          border: 1px solid #ffffff45;
          border-radius: 99px;
          color: #dbeafe;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.4px;
        }

        .hero h1 {
          margin: 18px 0 12px;
          max-width: 650px;
          font: 800 clamp(38px, 6vw, 70px)/1.02 'Outfit', sans-serif;
          letter-spacing: -2px;
        }

        .hero h1 span { color: #ffd44b; }

        .hero p {
          max-width: 550px;
          color: #dbe5ff;
          line-height: 1.7;
        }

        .hero-button {
          display: inline-block;
          margin-top: 12px;
          padding: 13px 20px;
          border: 0;
          border-radius: 12px;
          background: #ffd44b;
          color: #172554;
          font-weight: 800;
          text-decoration: none;
        }

        .section {
          width: 90%;
          max-width: 1240px;
          margin: 46px auto;
          scroll-margin-top: 95px;
        }

        .section-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 22px;
        }

        .section-heading h2 {
          margin: 0 0 7px;
          font: 800 clamp(25px, 4vw, 36px)/1.15 'Outfit', sans-serif;
          color: #15213d;
        }

        .section-heading p {
          margin: 0;
          color: #68748b;
          font-size: 14px;
          line-height: 1.6;
        }

        .section-tag {
          color: #5264a8;
          text-transform: uppercase;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.7px;
        }

        .panel {
          border: 1px solid #e8ebf4;
          background: #fff;
          border-radius: 22px;
          padding: 22px;
          box-shadow: 0 8px 28px #1a27510a;
        }

        .status-message {
          padding: 20px;
          border-radius: 14px;
          background: #f3f5fb;
          color: #68748b;
          line-height: 1.65;
        }

        .fixture-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .fixture {
          min-width: 0;
          padding: 20px;
          border: 1px solid #e6eaf2;
          border-radius: 18px;
          background: #fff;
        }

        .fixture-top {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 16px;
          color: #768197;
          font-size: 12px;
        }

        .live-pill {
          display: inline-block;
          padding: 5px 9px;
          border-radius: 99px;
          background: #fff0f0;
          color: #db2737;
          font-size: 10px;
          font-weight: 800;
        }

        .fixture-team {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
          font-weight: 700;
          font-size: 13px;
        }

        .fixture-team span {
          overflow-wrap: anywhere;
          line-height: 1.4;
        }

        .fixture-versus {
          margin: 14px 0;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 10px;
          align-items: center;
        }

        .score {
          margin: 8px 0;
          color: #66728a;
          font-size: 12px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
        }

        .team-card {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          min-width: 0;
          padding: 22px 12px 18px;
          border: 1px solid #e5e8f1;
          border-radius: 22px;
          background: #fff;
          box-shadow: 0 8px 24px #14254f08;
          transition: transform .2s, box-shadow .2s;
          text-align: center;
        }

        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 30px #14254f17;
        }

        .team-card.selected {
          border: 2px solid #4361c5;
          box-shadow: 0 10px 30px #4361c51e;
        }

        .team-card strong {
          font: 700 15px 'Outfit', sans-serif;
          color: #1d2943;
        }

        .team-card small {
          color: #8a94a9;
          font-size: 11px;
        }

        .team-logo {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          overflow: hidden;
          border-radius: 50%;
          border: 1px solid #ffffff40;
          box-shadow: inset 0 0 18px #00000016, 0 4px 16px #1a275118;
        }

        .team-logo img {
          width: 75%;
          height: 75%;
          object-fit: contain;
        }

        .team-logo span {
          color: white;
          font: 800 21px 'Outfit', sans-serif;
        }

        .fav-button {
          position: absolute;
          right: 9px;
          top: 8px;
          border: 0;
          background: transparent;
          color: #c6cad5;
          font-size: 21px;
        }

        .fav-button.active { color: #ef4565; }

        .search-box {
          width: 100%;
          max-width: 300px;
          padding: 12px 15px;
          border: 1px solid #dfe4ef;
          border-radius: 12px;
          outline: none;
          background: white;
        }

        .search-box:focus { border-color: #6783dc; }

        .squad-panel { margin-top: 26px; }

        .squad-title {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
          padding-bottom: 22px;
          border-bottom: 1px solid #eef0f6;
        }

        .squad-title h3 {
          margin: 0;
          font: 800 24px 'Outfit', sans-serif;
        }

        .squad-title p {
          margin: 6px 0 0;
          color: #778198;
          font-size: 13px;
        }

        .category-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin: 20px 0;
        }

        .category-tab {
          padding: 10px 14px;
          border: 1px solid #e0e5f0;
          border-radius: 10px;
          background: white;
          color: #526078;
          font-size: 12px;
          font-weight: 800;
        }

        .category-tab.active {
          background: #172554;
          color: white;
          border-color: #172554;
        }

        .player-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .player-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px;
          border: 1px solid #e8ebf3;
          border-radius: 14px;
          background: #fcfcff;
        }

        .player-initial {
          display: grid;
          place-items: center;
          min-width: 42px;
          height: 42px;
          border-radius: 13px;
          background: #e9eeff;
          color: #344e9a;
          font-weight: 800;
        }

        .player-card strong {
          display: block;
          color: #263149;
          font-size: 13px;
          line-height: 1.5;
        }

        .player-card small {
          display: block;
          margin-top: 4px;
          color: #818ba0;
          font-size: 11px;
        }

        .quiz-box {
          max-width: 700px;
          margin: auto;
        }

        .quiz-count {
          color: #6575b0;
          font-size: 12px;
          font-weight: 800;
        }

        .quiz-question {
          margin: 15px 0 22px;
          font: 700 22px/1.4 'Outfit', sans-serif;
          color: #1c2944;
        }

        .quiz-option {
          display: block;
          width: 100%;
          padding: 14px 16px;
          margin-top: 10px;
          border: 1px solid #e2e6f0;
          border-radius: 12px;
          text-align: left;
          background: white;
          color: #39445b;
        }

        .quiz-option.active {
          border-color: #4765c5;
          background: #edf1ff;
          color: #233a86;
        }

        .primary-button {
          padding: 12px 18px;
          margin-top: 18px;
          border: 0;
          border-radius: 12px;
          background: #233d87;
          color: white;
          font-weight: 800;
        }

        .footer {
          padding: 32px 6%;
          margin-top: 60px;
          text-align: center;
          background: #122044;
          color: #c7d3f0;
          font-size: 12px;
          line-height: 1.8;
        }

        .footer strong {
          display: block;
          margin-bottom: 6px;
          color: white;
          font: 800 22px 'Outfit', sans-serif;
        }

        @media (max-width: 950px) {
          .team-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .fixture-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 650px) {
          .navbar { align-items: flex-start; flex-direction: column; }
          .nav-links { gap: 13px; }
          .hero { width: 92%; padding: 32px 23px; }
          .section { width: 92%; }
          .section-heading { align-items: stretch; flex-direction: column; }
          .search-box { max-width: none; }
          .team-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .player-grid { grid-template-columns: 1fr; }
          .panel { padding: 15px; }
          .hero h1 { letter-spacing: -1px; }
        }
      `}</style>

      <nav className="navbar">
        <div className="brand">
          <div className="brand-ball">🏏</div>
          <span>CRICKET ZONE</span>
        </div>

        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#live">LIVE SCORES</a>
          <a href="#schedule">SCHEDULE</a>
          <a href="#teams">IPL TEAMS</a>
          <a href="#quiz">QUIZ</a>
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="hero-content">
          <span className="eyebrow">YOUR CRICKET WORLD</span>
          <h1>
            EVERY MATCH.
            <br />
            EVERY <span>MOMENT.</span>
          </h1>
          <p>
            Explore IPL teams, discover player squads, check match schedules,
            and stay connected with the game you love.
          </p>
          <a className="hero-button" href="#teams">
            Explore IPL Teams →
          </a>
        </div>
      </header>

      <section className="section" id="live">
        <div className="section-heading">
          <div>
            <div className="section-tag">MATCH CENTRE</div>
            <h2>Live Scores 🔴</h2>
            <p>Check available live match information.</p>
          </div>
        </div>

        {liveLoading ? (
          <div className="status-message">Loading live scores...</div>
        ) : liveError ? (
          <div className="status-message">{liveError}</div>
        ) : liveFixtures.length === 0 ? (
          <div className="status-message">
            No live fixtures are currently available.
          </div>
        ) : (
          <div className="fixture-grid">
            {liveFixtures.map((fixture, index) => (
              <article className="fixture" key={fixture.fixture_id || index}>
                <div className="fixture-top">
                  <span>
                    {fixture.league?.name || "Cricket Match"}
                  </span>
                  <span className="live-pill">● LIVE</span>
                </div>

                {renderFixtureTeam(fixture, "home")}
                <div className="score">
                  Score: {renderScore(fixture, "home")}
                </div>

                <div className="fixture-versus">
                  <span style={{ color: "#8c95a8", fontSize: 12 }}>VS</span>
                  <span style={{ fontWeight: 800, fontSize: 12 }}>MATCH</span>
                </div>

                {renderFixtureTeam(fixture, "away")}
                <div className="score">
                  Score: {renderScore(fixture, "away")}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="section" id="schedule">
        <div className="section-heading">
          <div>
            <div className="section-tag">UPCOMING MATCHES</div>
            <h2>Match Schedule 📅</h2>
            <p>Fixture dates and teams returned by your cricket API.</p>
          </div>
        </div>

        {scheduleLoading ? (
          <div className="status-message">Loading match schedule...</div>
        ) : scheduleError ? (
          <div className="status-message">{scheduleError}</div>
        ) : schedule.length === 0 ? (
          <div className="status-message">
            No upcoming fixtures are available from the API right now.
          </div>
        ) : (
          <div className="fixture-grid">
            {schedule.map((fixture, index) => (
              <article
                className="fixture"
                key={fixture.fixture_id || index}
              >
                <div className="fixture-top">
                  <span>{fixture.league?.name || "Cricket Match"}</span>
                  <span style={{ color: "#7c86a0" }}>UPCOMING</span>
                </div>

                <div className="fixture-versus">
                  {renderFixtureTeam(fixture, "home")}
                  <span style={{ color: "#9aa3b6", fontWeight: 800 }}>
                    VS
                  </span>
                </div>

                <div className="fixture-versus">
                  {renderFixtureTeam(fixture, "away")}
                  <span />
                </div>

                <div className="score">
                  📅 {matchDate(fixture.scheduled_start)}
                </div>

                <div className="score">
                  📍 {fixture.venue?.name || "Venue to be announced"}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="section" id="teams">
        <div className="section-heading">
          <div>
            <div className="section-tag">FRANCHISE DIRECTORY</div>
            <h2>IPL Teams 🏆</h2>
            <p>
              Select a team to see its player categories and jersey numbers.
            </p>
          </div>

          <input
            className="search-box"
            type="search"
            placeholder="🔍 Search IPL team..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="team-grid">
          {filteredTeams.map((team) => (
            <div
              key={team.short}
              className={`team-card ${
                selectedTeam?.short === team.short ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedTeam(team);
                setCategory("batters");
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setSelectedTeam(team);
                  setCategory("batters");
                }
              }}
            >
              <button
                className={`fav-button ${
                  favourite === team.short ? "active" : ""
                }`}
                title="Favourite team"
                aria-label={`Favourite ${team.name}`}
                onClick={(event) => {
                  event.stopPropagation();
                  saveFavourite(team);
                }}
              >
                {favourite === team.short ? "♥" : "♡"}
              </button>

              <TeamLogo team={team} size={88} />

              <strong>{team.name}</strong>
              <small>{team.short}</small>
              <small>
                {selectedTeam?.short === team.short
                  ? "✓ Selected"
                  : "Click to view squad"}
              </small>
            </div>
          ))}
        </div>

        {favourite && (
          <p style={{ color: "#5264a8", marginTop: 18, fontSize: 13 }}>
            ♥ Your favourite team:{" "}
            {TEAMS.find((team) => team.short === favourite)?.name}
          </p>
        )}

        {selectedTeam && (
          <div className="panel squad-panel">
            <div className="squad-title">
              <TeamLogo team={selectedTeam} size={74} />
              <div>
                <h3>{selectedTeam.name}</h3>
                <p>
                  {selectedTeam.short} · Player squad
                </p>
              </div>
            </div>

            <div className="category-tabs">
              <button
                className={`category-tab ${
                  category === "batters" ? "active" : ""
                }`}
                onClick={() => setCategory("batters")}
              >
                🏏 Batters & Wicketkeepers
              </button>

              <button
                className={`category-tab ${
                  category === "bowlers" ? "active" : ""
                }`}
                onClick={() => setCategory("bowlers")}
              >
                🎯 Bowlers
              </button>

              <button
                className={`category-tab ${
                  category === "allRounders" ? "active" : ""
                }`}
                onClick={() => setCategory("allRounders")}
              >
                ⭐ All-Rounders
              </button>
            </div>

            <div className="player-grid">
              {selectedTeam[category].map((player) => (
                <div className="player-card" key={player.name}>
                  <div
                    className="player-initial"
                    style={{
                      background: `${selectedTeam.color}25`,
                      color: selectedTeam.dark,
                    }}
                  >
                    {player.name.charAt(0)}
                  </div>

                  <div>
                    <strong>{player.name}</strong>
                    <small>
                      Jersey #{player.no} ·{" "}
                      {category === "batters"
                        ? "Batter / Wicketkeeper"
                        : category === "bowlers"
                        ? "Bowler"
                        : "All-Rounder"}
                    </small>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 11, color: "#7d879b", marginTop: 18 }}>
              Note: This is a starter squad list for the website. Confirm the
              latest official squads and jersey numbers before publishing.
            </p>
          </div>
        )}
      </section>

      <section className="section" id="quiz">
        <div className="section-heading">
          <div>
            <div className="section-tag">TEST YOUR KNOWLEDGE</div>
            <h2>Cricket Quiz 🧠</h2>
            <p>Answer a few quick cricket questions.</p>
          </div>
        </div>

        <div className="panel quiz-box">
          {quizFinished ? (
            <>
              <div className="section-tag">QUIZ COMPLETED</div>
              <h3 className="quiz-question">
                Your score: {quizScore} / {QUIZ.length}
              </h3>
              <p style={{ color: "#68748b" }}>
                {quizScore === QUIZ.length
                  ? "Perfect score! Cricket champion! 🏆"
                  : "Nice try! Play again to improve your score."}
              </p>
              <button className="primary-button" onClick={startQuizAgain}>
                Play Again
              </button>
            </>
          ) : (
            <>
              <span className="quiz-count">
                QUESTION {questionIndex + 1} OF {QUIZ.length}
              </span>

              <h3 className="quiz-question">
                {QUIZ[questionIndex].q}
              </h3>

              {QUIZ[questionIndex].options.map((option) => (
                <button
                  key={option}
                  className={`quiz-option ${
                    quizAnswer === option ? "active" : ""
                  }`}
                  onClick={() => setQuizAnswer(option)}
                >
                  {option}
                </button>
              ))}

              <button
                className="primary-button"
                onClick={submitAnswer}
                disabled={!quizAnswer}
                style={{
                  opacity: quizAnswer ? 1 : 0.5,
                  cursor: quizAnswer ? "pointer" : "not-allowed",
                }}
              >
                {questionIndex === QUIZ.length - 1
                  ? "Finish Quiz"
                  : "Next Question →"}
              </button>
            </>
          )}
        </div>
      </section>

      <footer className="footer">
        <strong>🏏 CRICKET ZONE</strong>
        Your cricket world, all in one place.
        <br />
        Built for cricket fans ❤️
      </footer>
    </div>
  );
}

export default App;