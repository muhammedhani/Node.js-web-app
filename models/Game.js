const mongoose = require('mongoose');
const joi = require('joi');

const gameSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 50,
	},
	genres: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Genre',
	},
	rating: {
		type: Number,
		required: true,
		min: 0.0,
		max: 10.0,
	},
});

const Game = mongoose.model('Game', gameSchema);

const validate_schema = joi.object({
	name: joi.string().min(3).max(50).required(),
	genres: joi.array(),
	rating: joi.number().min(0.0).max(10.0),
});

const schema_for_update = joi.object({
	name: joi.string().min(3).max(50),
	genres: joi.objectId(),
	rating: joi.number().min(0.0).max(10.0),
});

module.exports.Game = Game;
module.exports.schema = validate_schema;
module.exports.schema_for_update = schema_for_update;