const router = require('express').Router();

const {
	getCustomers,
	getCustomerById,
	createCustomer,
	updateCustomer,
	deleteCustomers,
	deleteCustomer,
} = require('../controllers/Customer.controller');


// ************************* GET *******************************
// get all customers
router.get('/', getCustomers);

// get custoemr by id
router.get('/:id', getCustomerById);
// *************************************************************

// ************************* POST ******************************
router.post('/', createCustomer);
// *************************************************************
// ************************* PUT/PATCH *************************
// update a customer by id
router.patch('/:id', updateCustomer);
// *************************************************************
// ************************* DELETE ****************************
// delete all customers
router.delete('/', deleteCustomers);

// delete a customer by id
router.delete('/:id', deleteCustomer);
// *************************************************************

module.exports = router;