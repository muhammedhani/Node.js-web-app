const mongoose = require('mongoose');
const joi = require('joi');

// Schema
const customerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 25,
	},
	email: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50,
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
		maxlength: 20,
	},
});

const Customer = mongoose.model('Customer', customerSchema);

// Input validation by Joi package
const validate_schema = joi.object({
	name: joi.string().min(3).max(50).required(),
	email: joi.string().min(5).max(50).required(),
	password: joi.string().min(8).max(20).required(),
});

module.exports.Customer = Customer;
module.exports.schema = validate_schema;
