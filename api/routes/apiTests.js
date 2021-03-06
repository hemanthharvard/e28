const express = require('express');
const router = express.Router();

/**
 * Test API
 */
router.get(['/'], (req, res, next) => {
	res.render('apiTests', {hostname: req.headers.host.split(':')[0], port: req.headers.host.split(':')[1] || 80});
});

module.exports = router;