const express = require('express');

const home = require('./routes/home');
const games = require('./routes/games');

const app = express();

app.use(express.json());

// a middleware
app.use((req, res, next) => {
	console.log(`${req.method}: ${req.url}`);
	next();
});

app.use('/', home);
app.use('/api/games', games);
// other endpoints...

module.exports = app;
