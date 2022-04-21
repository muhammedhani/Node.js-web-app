const mongoose = require('mongoose');
const joi = require('joi');

const genreSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50,
	},
	description: {
		type: String,
		minlength: 5,
		maxlength: 1024,
	},
});

const Genre = mongoose.model('Genre', genreSchema);

const validate_schema = joi.object({
	name: joi.string().min(5).max(50).required(),
	description: joi.string().min(5).max(1024),
});

const schema_for_update = joi.object({
	name: joi.string().min(5).max(50),
	description: joi.string().min(5).max(1024),
});

module.exports.Genre = Genre;
module.exports.schema = validate_schema;
module.exports.schema_for_update = schema_for_update;

