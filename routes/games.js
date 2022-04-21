const router = require('express').Router();
const {
	getGames,
	getGameById,
	createGame,
	deleteGames,
	deleteGame,
	updateGame
} = require('../controllers/Game.controller');

// ************************* GET ****************************
router.get('/', getGames);
router.get('/:id', getGameById);
// **********************************************************

// ************************* POST ***************************
router.post('/', createGame);
// **********************************************************

// ************************* PATCH **************************
router.patch('/:id', updateGame);
// **********************************************************

// ************************* DELETE *************************
router.delete('/', deleteGames);
router.delete('/:id', deleteGame);
// **********************************************************

module.exports = router;
