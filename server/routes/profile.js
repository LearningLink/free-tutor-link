const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

// initial profile page
router.get('/:tutorid', profileController.getSkills, profileController.getCurrentAvailability, (req, res) => {
	return res.status(200).json({ skills: res.locals.skills, availability: res.locals.availability });
});
// updating skill
router.put('/', profileController.updateSkills, profileController.getSkills, (req, res) => {
  return res.status(200).json({skills: res.locals.skills});
});

// adding availability
router.post('/', profileController.addAvailability, profileController.getCurrentAvailability, (req, res) => {
  return res.status(200).json({ availability: res.locals.availability});
});

// deleting availability
router.delete('/',  profileController.deleteAvailability, profileController.getCurrentAvailability, (req, res) => {
  return res.status(200).json({ availability: res.locals.availability});
});

module.exports = router;
