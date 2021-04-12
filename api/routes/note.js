const express = require('express');
const router = express.Router();

/**
 * Test API
 */
router.get('/apiTests', (req, res, next) => {
	res.render('apiTests', {hostname: req.headers.host.split(':')[0], port: req.headers.host.split(':')[1]});
});

module.exports = router;