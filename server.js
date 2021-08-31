require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connect = require("./config/dbConnect");

const app = express();

// database connection
connect();

// parsing data to json
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// apis

// listening server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is listening on port ${port}`));
