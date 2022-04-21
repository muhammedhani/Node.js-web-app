const { default: mongoose } = require('mongoose');
const { Game, schema , schema_for_update} = require('../models/Game');

// For GET
const getGames = async (req, res) => {
	const games = await Game.find().sort('name');
	res.send(games);
};

const getGameById = async (req, res) => {
	const game = await Game.findById(req.params.id);
	if (!game) {
		res.status(404).send('Invalid Game ID...');
		return;
	}
	res.send(game);
};

// For POST
const createGame = async (req, res) => {
	const { error } = schema.validate(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}
	const game = new Game({
		name: req.body.name,
		genres: req.body.genres,
		rating: req.body.rating,
	});
	await game.save();
	res.send(game);
};

// For PATCH
const updateGame = async (req, res) => {
	const { error } = schema_for_update.validate(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}
	const game = await Game.findByIdAndUpdate(
		req.params.id,
		{
			name: req.body.name,
			$addToSet: {
				genres: new mongoose.Types.ObjectId(req.body.genres),
			},
			rating: req.body.rating,
		},
		{ new: true }
	);
	res.send(game);
};

// For DELETE
const deleteGames = async (req, res) => {
	const games = await Game.find();
	await Game.deleteMany();
	res.send(games);
};

const deleteGame = async (req, res) => {
	const game = await Game.deleteOne(req.params.id);
	if (!game) {
		res.status(404).send('Invalid Game ID ...');
		return;
	}
	res.send(game);
};

module.exports = {
	getGames,
	getGameById,
	createGame,
	deleteGames,
	deleteGame,
	updateGame
};
