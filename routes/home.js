const router = require('express').Router();

// for test
router.get('/', (req, res) => {
	res.send('Hello World!');
});

module.exports = router;
