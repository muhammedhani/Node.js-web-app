const { Genre, schema, schema_for_update } = require('../models/Genre');

// For GET
const getGenres = async (req, res) => {
	const genres = await Genre.find().sort('name');
	res.send(genres);
};

const getGenreById = async (req, res) => {
	const genre = await Genre.findById(req.params.id);
	if (!genre) {
		res.status(404).send('Invalid Genre ID ...');
		return;
	}
	res.send(genre);
};

// For POST
const createGenre = async (req, res) => {
	const { error } = schema.validate(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}
	const game = new Genre({
		name: req.body.name,
		description: req.body.description,
	});
	await game.save();
	res.send(game);
};
// For PATCH
const updateGenre = async (req, res) => {
	const { error } = schema_for_update.validate(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}
	const genre = await Genre.findByIdAndUpdate(
		req.params.id,
		{
			name: req.body.name,
			description: req.body.description,
		},
		{ new: true }
	);
	res.send(genre);
};

// For DELETE
const deleteGenres = async (req, res) => {
	const genres = await Genre.find();
	await Genre.deleteMany();
	res.send(genres);
};

const deleteGenre = async (req, res) => {
	const genre = await Genre.deleteOne(req.params.id);
	if (!genre) {
		res.status(404).send('Invalid Genre ID ...');
		return;
	}
	res.send(genre);
};

module.exports = {
	getGenres,
	getGenreById,
	createGenre,
	updateGenre,
	deleteGenres,
	deleteGenre,
};
