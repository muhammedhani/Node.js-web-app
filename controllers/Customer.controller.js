const { Customer, schema } = require('../models/Customer');

// For GET
const getCustomers = async (req, res) => {
	const customers = await Customer.find().sort('name');
	res.send(customers);
};

const getCustomerById = async (req, res) => {
	const customer = await Customer.findById(req.params.id);
	if (!customer) {
		res.status(404).send('Invalid Customer ID...');
		return;
	}
	res.send(customer);
};
// For POST
const createCustomer = async (req, res) => {
	const { error } = schema.validate(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}
	const customer = new Customer({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	});
	await customer.save();
	res.send(customer);
};

module.exports = {
	getCustomers,
	getCustomerById,
	createCustomer,
};
