// const logger = require('log-util');
const models = require('../models');

class DataService {

	static listOrder(id) {
		return new Promise((resolve, reject) => {
			const Order = models('order');
			Order.find({_id: id}).exec((err, docs) => {
				if (err) {
					// logger.error(`Failed to retrieve order: ${id}`, err.message);
					reject (new Error(err.message));
				}
				else {
					if (docs.length) {
						resolve ({
							status: 'success',
							statusCode: 200,
							data: docs
						});
					}
					else {
						resolve ({
							status: 'failed',
							statusCode: 404,
							data: docs
						});
					}
				}
			});
		});
	}

	static listOrders() {
		return new Promise((resolve, reject) => {
			const Order = models('order');
			Order.find().sort({updated: 'descending'}).exec((err, docs) => {
				if (err) {
					// logger.error('Failed to retrieve orders: ', err.message);
					reject (new Error(err.message));
				}
				else {
					resolve ({
						status: 'success',
						statusCode: 200,
						data: docs
					});
				}
			});
		});
	}
  
	static newOrder(data) {
		return new Promise((resolve, reject) => {
			const Order = models('order');
			const newOrder = new Order(data);
			newOrder.save((err) => {
				if (err) {
					// logger.error('Failed to save new order: ', err.message);
					reject (new Error(err.message));
				}
				else {
					resolve ({
						status: 'success',
						statusCode: 200,
						data: newOrder
					});
				}
			})
		});
	}

	static updateOrder(id, data) {
		return new Promise((resolve, reject) => {
			const Order = models('order');
			Order.findById({_id: id}).exec((err, retrievedOrder) => {
				if (err) {
					// logger.error(`Failed to fetch order number: ${id}`, err.message);
					reject (new Error(err.message));
				}
				else {
					if (retrievedOrder) {
						retrievedOrder.set(data);
						retrievedOrder.save((err) => {
							if (err) {
								// logger.error(`Failed to update order number: ${id}`, err.message);
								reject (new Error(err.message));
							}
							else {
								resolve ({
									status: 'success',
									statusCode: 200,
									message: `success updating Order Number: ${id}`
								});
							}
						});
					}
					else {
						resolve ({
							status: 'failed',
							statusCode: 404,
							message: `Order Number: ${id} not found`
						});
					}
				}
			});
		});
	}

	static deleteOrder(id) {

		return new Promise((resolve, reject) => {
			const Order = models('order');
			Order.findById({_id: id}).exec((err, retrievedOrder) => {
				if (err) {
					// logger.error(`Failed to fetch order number: ${id}`, err.message);
					reject (new Error(err.message));
				}
				else {
					if (retrievedOrder) {
						Order.deleteOne({_id: id}).exec((err) => {
							if (err) {
								// logger.error(`Failed to remove order number: ${id}`, err.message);
								reject (new Error(err.message));
							}
							else {
								resolve ({
									status: 'success',
									statusCode: 200,
									message: `success deleting Order Number: ${id}`
								});
							}
						});
					}
					else {
						resolve ({
							status: 'failed',
							statusCode: 404,
							message: `Order Number: ${id} not found`
						});
					}
				}
			});
		});

	}

	static deleteOrders() {
		return new Promise((resolve, reject) => {
			const Order = models('order');
			Order.deleteMany().exec((err, docs) => {
				if (err) {
					// logger.error(`Failed to remove all orders: `, err.message);
					reject (new Error(err.message));
				}
				else {
					resolve ({
						status: 'success',
						statusCode: 200,
						message: 'success deleting all orders'
					});
				}
			});
		});
	}

  }
  
  module.exports.DataService = DataService;