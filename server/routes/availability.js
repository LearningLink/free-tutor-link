const express = require('express');
const router = express.Router();
const availabilityController = require('../controllers/availabilityController');
// tutors_input_ availability routes
// availabilityController.getTutors,
router.get('/:subject', availabilityController.getSubjectID, availabilityController.getTutors, (req, res) => {
	return res.status(200).send(`Hello your subject was, ${req.params.subject}`);
});

module.exports = router;
