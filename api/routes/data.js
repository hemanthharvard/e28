const express = require('express');
const router = express.Router();
const dataService = require('../controllers/dataService');
const DataService = dataService.DataService;
const UserService = dataService.UserService;

const allowedOrigins = ['http://localhost:8081', 'http://e28p2.hemanthkishen.com', 'http://e28p3.hemanthkishen.com'];

const cookieMaxAge = 24 * 60; // 24 hours

router.use((req, res, next) => {
	res.set({
		// allow certain domains only, allow REST methods we've implemented
		'Access-Control-Allow-Origin': allowedOrigins.indexOf(req.headers.origin) !== -1 ? req.headers.origin : "",
		'Access-Control-Allow-Credentials': true,
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
		"Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers",
	});
	if (req.method === 'OPTIONS') {
		return res.status(200).end();
	}
	next();
});

// API Interface

router.get('/', (req, res, next) => {
	res.set({
		'Content-type': 'text/plain'
	});
	res.send('It\'s alive!');
});

router.get('/ping', (req, res, next) => {
	res.set({
		'Content-type': 'text/plain'
	});
	res.send('pong');
});

// Notes Interface

router.get('/listNote/:id', async (req, res, next) => {

	res.set({
		'Content-type': 'application/json'
	});

	if (req.cookies.token) {
		if (req.params.id) {
			try {
				const data = await DataService.listNote(req.params.id);
				res.statusCode = data.statusCode;
				res.send(data);
			} catch (err) {
				res.statusCode = 500;
				res.send({
					status: 'failed',
					message: err.message
				});
			}
		} else {
			res.statusCode = 400;
			res.send({
				status: 'failed',
				message: 'Invalid ID'
			});
		}
	} else {
		res.statusCode = 401;
		res.send({
			status: 'failed',
			message: 'Unauthorized'
		});
	}

});

router.post('/listNotes', async (req, res, next) => {

	res.set({
		'Content-type': 'application/json'
	});

	if (req.cookies.token) {
		try {
			const data = await DataService.listNotes(req.body);
			res.statusCode = data.statusCode;
			res.send(data);
		} catch (err) {
			res.statusCode = 500;
			res.send({
				status: 'failed',
				message: err.message
			});
		}
	} else {
		res.statusCode = 401;
		res.send({
			status: 'failed',
			message: 'Unauthorized'
		});
	}

});

router.post('/newNote', async (req, res, next) => {

	res.set({
		'Content-type': 'application/json'
	});

	if (req.cookies.token) {
		try {
			const data = await DataService.newNote(req.body);
			res.statusCode = data.statusCode;
			res.send(data);
		} catch (err) {
			if (err.message.startsWith('note validation failed')) {
				res.statusCode = 400;
				res.send({
					status: 'failed',
					message: err.message
				});
			} else {
				res.statusCode = 500;
				res.send({
					status: 'failed',
					message: err.message
				});
			}
		}
	} else {
		res.statusCode = 401;
		res.send({
			status: 'failed',
			message: 'Unauthorized'
		});
	}

});

router.put('/updateNote/:id', async (req, res, next) => {

	res.set({
		'Content-type': 'application/json'
	});

	if (req.cookies.token) {
		if (req.params.id) {
			try {
				const data = await DataService.updateNote(req.params.id, req.body);
				res.statusCode = data.statusCode;
				res.send(data);
			} catch (err) {
				if (err.message.startsWith('note validation failed')) {
					res.statusCode = 400;
					res.send({
						status: 'failed',
						message: err.message
					});
				} else {
					res.statusCode = 500;
					res.send({
						status: 'failed',
						message: err.message
					});
				}
			}
		} else {
			res.statusCode = 400;
			res.send({
				status: 'failed',
				message: 'Invalid ID'
			});
		}
	} else {
		res.statusCode = 401;
		res.send({
			status: 'failed',
			message: 'Unauthorized'
		});
	}

});

router.delete('/deleteNote/:id', async (req, res, next) => {

	res.set({
		'Content-type': 'application/json'
	});

	if (req.cookies.token) {
		if (req.params.id) {
			try {
				const data = await DataService.deleteNote(req.params.id);
				res.statusCode = data.statusCode;
				res.send(data);
			} catch (err) {
				res.statusCode = 500;
				res.send({
					status: 'failed',
					message: err.message
				});
			}
		} else {
			res.statusCode = 400;
			res.send({
				status: 'failed',
				message: 'Invalid ID'
			});
		}
	} else {
		res.statusCode = 401;
		res.send({
			status: 'failed',
			message: 'Unauthorized'
		});
	}
});

router.delete('/deleteAllNotes', async (req, res, next) => {

	res.set({
		'Content-type': 'application/json'
	});

	if (req.cookies.token) {
		try {
			const data = await DataService.deleteNotes();
			res.statusCode = data.statusCode;
			res.send(data);
		} catch (err) {
			res.statusCode = 500;
			res.send({
				status: 'failed',
				message: err.message
			});
		}
	} else {
		res.statusCode = 401;
		res.send({
			status: 'failed',
			message: 'Unauthorized'
		});
	}

});

// User Interface

router.post('/loginUser', async (req, res, next) => {

	res.set({
		'Content-type': 'application/json'
	});

	if (req.body) {
		try {
			const data = await UserService.validateUser(req.body);
			if (data.status === "success") {
				res.set({
					"Set-Cookie": `token=encryptedstring; HttpOnly; Max-Age=${cookieMaxAge}`,
				});
			}
			res.statusCode = data.statusCode;
			res.send(data);
		} catch (err) {
			res.statusCode = 500;
			res.send({
				status: 'failed',
				message: err.message
			});
		}
	} else {
		res.statusCode = 400;
		res.send({
			status: 'failed',
			message: 'Invalid ID'
		});
	}

});

router.get('/listUsers', async (req, res, next) => {

	res.set({
		'Content-type': 'application/json'
	});

	try {
		const data = await UserService.fetchUsers();
		res.statusCode = data.statusCode;
		res.send(data);
	} catch (err) {
		res.statusCode = 500;
		res.send({
			status: 'failed',
			message: err.message
		});
	}

});

router.post('/newUser', async (req, res, next) => {

	res.set({
		'Content-type': 'application/json'
	});

	try {
		const data = await UserService.newUser(req.body);
		res.statusCode = data.statusCode;
		res.send(data);
	} catch (err) {
		if (err.message.startsWith('note validation failed')) {
			res.statusCode = 400;
			res.send({
				status: 'failed',
				message: err.message
			});
		} else {
			res.statusCode = 500;
			res.send({
				status: 'failed',
				message: err.message
			});
		}
	}

});

router.put('/updateUser/:id', async (req, res, next) => {

	res.set({
		'Content-type': 'application/json'
	});

	if (req.params.id) {
		try {
			const data = await UserService.updateUser(req.params.id, req.body);
			res.statusCode = data.statusCode;
			res.send(data);
		} catch (err) {
			if (err.message.startsWith('user validation failed')) {
				res.statusCode = 400;
				res.send({
					status: 'failed',
					message: err.message
				});
			} else {
				res.statusCode = 500;
				res.send({
					status: 'failed',
					message: err.message
				});
			}
		}
	} else {
		res.statusCode = 400;
		res.send({
			status: 'failed',
			message: 'Invalid ID'
		});
	}

});

router.delete('/deleteUser/:id', async (req, res, next) => {

	res.set({
		'Content-type': 'application/json'
	});

	if (req.params.id) {
		try {
			const data = await UserService.deleteUser(req.params.id);
			res.statusCode = data.statusCode;
			res.send(data);
		} catch (err) {
			res.statusCode = 500;
			res.send({
				status: 'failed',
				message: err.message
			});
		}
	} else {
		res.statusCode = 400;
		res.send({
			status: 'failed',
			message: 'Invalid ID'
		});
	}
});

router.delete('/deleteAllUsers', async (req, res, next) => {

	res.set({
		'Content-type': 'application/json'
	});

	try {
		const data = await UserService.deleteUsers();
		res.statusCode = data.statusCode;
		res.send(data);
	} catch (err) {
		res.statusCode = 500;
		res.send({
			status: 'failed',
			message: err.message
		});
	}

});

module.exports = router;