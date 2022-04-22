const router = require('express').Router();
const {
	getCustomers,
	getCustomerById,
	createCustomer,
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

module.exports = router;