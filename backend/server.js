
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Backend test
app.get("/", (req, res) => {
  res.send("Cricket Zone Backend is Running! 🏏");
});

// Live cricket scores
app.get("/api/live-scores", async (req, res) => {
  try {
    const apiKey = process.env.CRICWIX_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        message: "API key missing in backend/.env",
      });
    }

    const response = await fetch(
      "https://api.cricwix.com/ext/v1/fixtures?status=live",
      {
        headers: { "X-Api-Key": apiKey },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch live scores",
      details: error.message,
    });
  }
});

// Match schedule — only ONE route
app.get("/api/match-schedule", async (req, res) => {
  try {
    const apiKey = process.env.CRICWIX_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        message: "API key missing in backend/.env",
      });
    }

    const response = await fetch(
      "https://api.cricwix.com/ext/v1/fixtures?status=upcoming&limit=20",
      {
        headers: { "X-Api-Key": apiKey },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Unable to load match schedule",
      details: error.message,
    });
  }
});

// Start backend server
app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
