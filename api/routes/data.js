const express = require('express');
const router = express.Router();
const dataService = require('../controllers/dataService');
const DataService = dataService.DataService;

router.use((req, res, next) => {
	res.set({
		// allow any domain, allow REST methods we've implemented
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
		"Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers",
	});
	if (req.method === 'OPTIONS') {
		return res.status(200).end();
	}
	next();
});

router.get('/ping', (req, res, next) => {
	res.set({'Content-type': 'text/plain'});
	res.send('pong');
});

router.get('/listOrder/:id', async(req, res, next) => {

	res.set({'Content-type': 'application/json'});

	if (req.params.id) {
		try {
			const data = await DataService.listOrder(req.params.id);
			res.statusCode = data.statusCode;
			res.send(data);
		}
		catch (err) {
			res.statusCode = 500;
			res.send({
				status: 'failed',
				message: err.message
			});
		}
	}
	else {
		res.statusCode = 400;
		res.send({
			status: 'failed',
			message: 'Invalid ID'
		});
	}
	
});

router.get('/listOrders', async(req, res, next) => {
	
	res.set({'Content-type': 'application/json'});

	try {
		const data = await DataService.listOrders();
		res.statusCode = data.statusCode;
		res.send(data);
	}
	catch (err) {
		res.statusCode = 500;
		res.send({
			status: 'failed',
			message: err.message
		});
	}

});

router.post('/newOrder', async(req, res, next) => {

	res.set({'Content-type': 'application/json'});

	try {
		const data = await DataService.newOrder(req.body);
		res.statusCode = data.statusCode;
		res.send(data);
	}
	catch (err) {
		if (err.message.startsWith('order validation failed')) {
			res.statusCode = 400;
			res.send({
				status: 'failed',
				message: err.message
			});
		}
		else {
			res.statusCode = 500;
			res.send({
				status: 'failed',
				message: err.message
			});
		}
	}

});

router.put('/updateOrder/:id', async(req, res, next) => {

	res.set({'Content-type': 'application/json'});

	if (req.params.id) {
		try {
			const data = await DataService.updateOrder(req.params.id, req.body);
			res.statusCode = data.statusCode;
			res.send(data);
		}
		catch (err) {
			if (err.message.startsWith('order validation failed')) {
				res.statusCode = 400;
				res.send({
					status: 'failed',
					message: err.message
				});
			}
			else {
				res.statusCode = 500;
				res.send({
					status: 'failed',
					message: err.message
				});
			}
		}
	}
	else {
		res.statusCode = 400;
		res.send({
			status: 'failed',
			message: 'Invalid ID'
		});
	}

});

router.delete('/deleteOrder/:id', async(req, res, next) => {

	res.set({'Content-type': 'application/json'});

	if (req.params.id) {
		try {
			const data = await DataService.deleteOrder(req.params.id);
			res.statusCode = data.statusCode;
			res.send(data);
		}
		catch (err) {
			res.statusCode = 500;
			res.send({
				status: 'failed',
				message: err.message
			});
		}
	}
	else {
		res.statusCode = 400;
		res.send({
			status: 'failed',
			message: 'Invalid ID'
		});
	}
});

router.delete('/deleteAllOrders', async(req, res, next) => {

	res.set({'Content-type': 'application/json'});

	try {
		const data = await DataService.deleteOrders();
		res.statusCode = data.statusCode;
		res.send(data);
	}
	catch (err) {
		res.statusCode = 500;
		res.send({
			status: 'failed',
			message: err.message
		});
	}

});

module.exports = router;