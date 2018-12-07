// import "newrelic";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import router from "./router.js";
import path from "path";
// import App from '../client/src/index.js';

// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const cors = require('cors');

// const db = require('../database/nosql/index.js');
// const router = require('./router.js');

const app = express();
const source = path.join(__dirname, "../client/dist/");

app.use(bodyParser.json());
app.use(express.static(source));

app.use(cors());
app.all("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/", router);

app.listen(7000, () => {
  console.log("Listening on port 7000");
});

module.exports.app = app;
