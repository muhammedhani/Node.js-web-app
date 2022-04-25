const { Customer, schema, schema_for_update } = require('../models/Customer');

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
// For PUT/PATCH
const updateCustomer = async (req, res) => {
	const { error } = schema_for_update.validate(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}
	const customer = await Customer.findByIdAndUpdate(
		req.params.id,
		{
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		},
		{ new: true }
	);
	if (!customer) {
		return res.status(404).send('Invalid Customer ID...');
	}
	res.send(customer);
};
// For DELETE
const deleteCustomers = async (req, res) => {
	const customers = await Customer.find();
	await Customer.deleteMany();
	res.send(customers);
};

const deleteCustomer = async (req, res) => {
	const customer = await Customer.findByIdAndRemove(req.params.id);
	if (!customer) {
		res.status(404).send('Invalid Customer ID...');
		return;
	}
	res.send(customer);
};


module.exports = {
	getCustomers,
	getCustomerById,
	createCustomer,
	updateCustomer,
	deleteCustomers,
	deleteCustomer,
};
