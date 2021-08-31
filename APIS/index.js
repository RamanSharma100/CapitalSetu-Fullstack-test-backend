const express = require("express");
const router = express.Router();

const authAPI = require("./auth");
const dicoverMoviesAPi = require("./discover");

// auth api [Login, Register]
router.use("/auth", authAPI);

// dicover movies api
router.use("/discover", dicoverMoviesAPi);

module.exports = router;
