const http = require('http');
const logger = require('log-util');

class OrderUtils {

	static ping = async() => {
		const options = {
			hostname: process.env.hostname,
			port: process.env.PORT,
			path: `/data/ping`,
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		};
	
		return new Promise((resolve, reject) => {
			var req = http.request(options, (res) => {
				res.setEncoding('utf8');
				if (res.statusCode === 200) {
					res.on('data', (chunk) => {
						// logger.debug('BODY: ', chunk);
						try {
							// const parsedData = JSON.parse(chunk);
							resolve(chunk);
						}
						catch (e) {
							logger.error('problem parsing response: ', e.message);
							reject({
								status: 'failed',
								data: []
							});
						}
					});
				}
				else {
					logger.error('problem with response: ', res.statusCode, res.statusMessage);
					reject({
						status: 'failed',
						data: []
					});
				}
			});
			req.on('error', (e) => {
				logger.error('problem with request: ', e.message);
				reject({
					status: 'failed',
					data: []
				});
			});
			
			req.end();
		});
	};

	static fetchOrder = async(id) => {
		const options = {
			hostname: process.env.hostname,
			port: process.env.PORT,
			path: `/data/listOrder/${id}`,
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		};
	
		return new Promise((resolve, reject) => {
			var req = http.request(options, (res) => {
				res.setEncoding('utf8');
				if (res.statusCode === 200) {
					res.on('data', (chunk) => {
						// logger.debug('BODY: ', chunk);
						try {
							const parsedData = JSON.parse(chunk);
							resolve(parsedData);
						}
						catch (e) {
							logger.error('problem parsing response: ', e.message);
							reject({
								status: 'failed',
								data: []
							});
						}
					});
				}
				else {
					logger.error('problem with response: ', res.statusCode, res.statusMessage);
					reject({
						status: 'failed',
						data: []
					});
				}
			});
			req.on('error', (e) => {
				logger.error('problem with request: ', e.message);
				reject({
					status: 'failed',
					data: []
				});
			});
			
			req.end();
		});
	};

	static fetchAllOrders = async() => {
		const options = {
			hostname: process.env.hostname,
			port: process.env.PORT,
			path: '/data/listOrders',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		};
	
		return new Promise((resolve, reject) => {
			var req = http.request(options, (res) => {
				res.setEncoding('utf8');
				if (res.statusCode === 200) {
					res.on('data', (chunk) => {
						// logger.debug('BODY: ', chunk);
						try {
							const parsedData = JSON.parse(chunk);
							resolve(parsedData);
						}
						catch (e) {
							logger.error('problem parsing response: ', e.message);
							reject({
								status: 'failed',
								data: []
							});
						}
					});
				}
				else {
					logger.error('problem with response: ', res.statusCode, res.statusMessage);
					reject({
						status: 'failed',
						data: []
					});
				}
			});
			req.on('error', (e) => {
				logger.error('problem with request: ', e.message);
				reject({
					status: 'failed',
					data: []
				});
			});
			
			req.end();
		});
	};

	static createNewOrder = async(data) => {
		const options = {
			hostname: process.env.hostname,
			port: process.env.PORT,
			path: '/data/newOrder',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		};
	
		return new Promise((resolve, reject) => {
			var req = http.request(options, (res) => {
				res.setEncoding('utf8');
				if (res.statusCode === 200) {
					res.on('data', (chunk) => {
						try {
							const parsedData = JSON.parse(chunk);
							resolve(parsedData);
						}
						catch (e) {
							logger.error('problem parsing response: ', e.message);
							reject({
								status: 'failed',
								data: []
							});
						}
					});
				}
				else {
					logger.error('problem with response: ', res.statusCode, res.statusMessage);
					reject({
						status: 'failed',
						data: []
					});
				}
			});
			req.on('error', (e) => {
				logger.error('problem with request: ', e.message);
				reject({
					status: 'failed',
					data: []
				});
			});
			
			// write data to request body
			req.write(JSON.stringify(data));
			req.end();
		});
	};
	
	static updateOrder = async(data) => {
		const options = {
			hostname: process.env.hostname,
			port: process.env.PORT,
			path: `/data/updateOrder/${data.orderId}`,
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			}
		};
	
		// Delete the ID in the data
		delete(data.orderId);
		return new Promise((resolve, reject) => {
			var req = http.request(options, (res) => {
				res.setEncoding('utf8');
				if (res.statusCode === 200) {
					res.on('data', (chunk) => {
						try {
							const parsedData = JSON.parse(chunk);
							resolve(parsedData);
						}
						catch (e) {
							logger.error('problem parsing response: ', e.message);
							reject({
								status: 'failed',
								data: []
							});
						}
					});
				}
				else {
					logger.error('problem with response: ', res.statusCode, res.statusMessage);
					reject({
						status: 'failed',
						data: []
					});
				}
			});
			req.on('error', (e) => {
				logger.error('problem with request: ', e.message);
				reject({
					status: 'failed',
					data: []
				});
			});
			
			// write data to request body
			req.write(JSON.stringify(data));
			req.end();
		});
	};

	static deleteOrder = async(id) => {
		const options = {
			hostname: process.env.hostname,
			port: process.env.PORT,
			path: `/data/deleteOrder/${id}`,
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		};
	
		return new Promise((resolve, reject) => {
			var req = http.request(options, (res) => {
				res.setEncoding('utf8');
				if (res.statusCode === 200) {
					res.on('data', (chunk) => {
						// logger.debug('BODY: ', chunk);
						try {
							const parsedData = JSON.parse(chunk);
							resolve(parsedData);
						}
						catch (e) {
							logger.error('problem parsing response: ', e.message);
							reject({
								status: 'failed',
								data: []
							});
						}
					});
				}
				else {
					logger.error('problem with response: ', res.statusCode, res.statusMessage);
					reject({
						status: 'failed',
						data: []
					});
				}
			});
			req.on('error', (e) => {
				logger.error('problem with request: ', e.message);
				reject({
					status: 'failed',
					data: []
				});
			});
			
			req.end();
		});
	};

	static deleteAllOrders = async() => {
		const options = {
			hostname: process.env.hostname,
			port: process.env.PORT,
			path: `/data/deleteAllOrders`,
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		};
	
		return new Promise((resolve, reject) => {
			var req = http.request(options, (res) => {
				res.setEncoding('utf8');
				if (res.statusCode === 200) {
					res.on('data', (chunk) => {
						// logger.debug('BODY: ', chunk);
						try {
							const parsedData = JSON.parse(chunk);
							resolve(parsedData);
						}
						catch (e) {
							logger.error('problem parsing response: ', e.message);
							reject({
								status: 'failed',
								data: []
							});
						}
					});
				}
				else {
					logger.error('problem with response: ', res.statusCode, res.statusMessage);
					reject({
						status: 'failed',
						data: []
					});
				}
			});
			req.on('error', (e) => {
				logger.error('problem with request: ', e.message);
				reject({
					status: 'failed',
					data: []
				});
			});
			
			req.end();
		});
	};

}

module.exports.OrderUtils = OrderUtils;