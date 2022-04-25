const express = require('express');
const joi = require('joi');
joi.objectId = require('joi-objectid')(joi);
// for deployment

const home = require('./routes/home');
const games = require('./routes/games');
const genres = require('./routes/genres');
const customer = require('./routes/customer');

const app = express();

app.use(express.json());

// a middleware
app.use((req, res, next) => {
	console.log(`${req.method}: ${req.url}`);
	next();
});

app.use('/', home);
app.use('/api/games', games);
app.use('/api/genres', genres);
app.use('/api/customer', customer);
// other endpoints...

// for deployment
require('./production')(app);

module.exports = app;
