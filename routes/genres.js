const router = require('express').Router();
const {
	getGenres,
	getGenreById,
	createGenre,
	updateGenre,
	deleteGenres,
	deleteGenre,
} = require('../controllers/Genre.controller');
// ************************* GET ****************************
router.get('/', getGenres);
router.get('/:id', getGenreById);
// **********************************************************

// ************************* POST ***************************
router.post('/', createGenre);
// **********************************************************

// ************************* PATCH **************************
router.patch('/:id', updateGenre);
// **********************************************************

// ************************* DELETE *************************
router.delete('/', deleteGenres);
router.delete('/:id', deleteGenre);
// **********************************************************

module.exports = router;
