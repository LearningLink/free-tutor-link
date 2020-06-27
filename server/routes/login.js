const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/authCode', loginController.getAccessToken);
router.get('/', loginController.sendToLinkedIn);

module.exports = router;
