const express = require('express');
const joi = require('joi');
joi.objectId = require('joi-objectid')(joi);

const home = require('./routes/home');
const games = require('./routes/games');
const genres = require('./routes/genres');

const app = express();

app.use(express.json());

// a middleware
app.use((req, res, next) => {
	console.log(`${req.method}: ${req.url}`);
	next();
});

app.use('/', home);
app.use('/api/games', games);
app.use('/api/genres',genres);
// other endpoints...

module.exports = app;
