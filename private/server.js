const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
const router = require("express").Router();
const routes = require("./routes/v1/router");
app.use(express.json());
const keys = require("../keys.json");
require("dotenv").config();

app.set("keys", keys.lokachee);

const PORT = process.env.PORT || 3001;
require("./database/database")("lokachee")
app.use(cors());

app.use("", routes);

app.listen(PORT, console.log(`APP RUNNING ON ${PORT}`));
