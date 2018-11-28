import bodyParser from 'body-parser';
import cors from 'cors';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import router from './router.js';
// import App from '../client/src/index.js';

// require('newrelic');
// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const cors = require('cors');

// const db = require('../database/nosql/index.js');
// const router = require('./router.js');

const app = express();
// const source = path.join(__dirname, '/../client/dist');

app.use(bodyParser.json());
app.use(express.static('/Users/maria/Documents/HR/Reviews/client/dist/'));

app.use(cors());
app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/', router);

app.listen(7000, () => { console.log('Listening on port 7000'); });

module.exports.app = app;
