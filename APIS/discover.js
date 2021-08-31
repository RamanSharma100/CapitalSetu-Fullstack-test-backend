const express = require("express");
const router = express.Router();
const axios = require("axios");

const API_KEY = process.env.Movie_DB_API_KEY;
const API_ENDPOINT = process.env.Mobive_DB_Discover_Movie_API;

router.get("/all", async (req, res) => {
  const sort_by = "revenue.desc";
  const { data } = await axios.get(API_ENDPOINT, {
    params: {
      api_key: API_KEY,
      sort_by,
    },
  });

  res.status(200).json({ succes: true, results: data });
});
router.get("/latest", async (req, res) => {
  const sort_by = "release_date.desc";
  const { data } = await axios.get(API_ENDPOINT, {
    params: {
      api_key: API_KEY,
      sort_by,
    },
  });

  res.status(200).json({ succes: true, results: data });
});
router.get("/popular", async (req, res) => {
  const sort_by = "popularity.desc";
  const { data } = await axios.get(API_ENDPOINT, {
    params: {
      api_key: API_KEY,
      sort_by,
    },
  });

  res.status(200).json({ succes: true, results: data });
});

module.exports = router;
