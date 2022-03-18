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
