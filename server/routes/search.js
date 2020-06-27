const express = require('express');
const router = express.Router();

const searchController = require('../controllers/searchController');

router.get('/', searchController.getSkillsList, (req, res) => {
  console.log('Inside search route');
  return res.status(200).json({skills: res.locals.skills});
});

module.exports = router;