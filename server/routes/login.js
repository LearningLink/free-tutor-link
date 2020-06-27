const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/', loginController.sendToLinkedIn, (req, res) => {
	return res.status(200).send(`You've routed through login`);
});

module.exports = router;
