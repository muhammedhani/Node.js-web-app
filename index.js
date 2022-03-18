const express = require('express');
const app = express();
const Joi = require('joi');
const func = require('./helpful_functions');

// ********************************** PUT Request **********************************
app.put('/api/games/:id', (req, res) => {
	const game = games.find((c) => c.id === parseInt(req.params.id));
	if (!game) {
		res.status(404).send('The game with this id was not found...');
		return;
	}

	// Input Validation with joi package
	const schema = {
		genre: Joi.string().required(),
		name: Joi.string().min(3).required(),
	};
	const result = Joi.validate(req.body, schema);
	if (result.error) {
		res.status(400).send(error.details[0].message);
		return;
	}

	game.genre = req.body.genre;
	game.name = req.body.name;
	res.send(game);
});
// ****************************************************************************************


app.use(express.json());

const games = [
	{ id: 1, genre: 'Sport', name: 'FIFA 22' },
	{ id: 2, genre: 'Action', name: 'Call of Duty' },
	{ id: 3, genre: 'Battle Royal', name: 'PUBG' },
];

// ********************************** GET Request **********************************
// Get all games
app.get('/api/games', (req, res) => {
	res.send(games);
});

// Get by id -> "/api/games/id"
app.get('/api/games/:id', (req, res) => {
	const game = games.find((c) => c.id === parseInt(req.params.id));
	if (!game) {
		res.status(404).send('The game was not found...');
		return;
	}
	res.send(game);
});
// ****************************************************************************************

// PORTs
const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`Listening on port ${port}!`);
});
