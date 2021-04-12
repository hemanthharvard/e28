const logger = require('log-util');
const chalk = require('chalk');
const orderUtils = require('../../utils/orderUtils');
const OrderUtils = orderUtils.OrderUtils;

let newOrderId = '';

class ApiTests {
	static apiTests = async() => {
		return new Promise(async(resolve) => {

			logger.info(chalk.magenta('Running API Tests'));
			console.log();

			/**
			 * Ping Test
			 */
			logger.info(chalk.yellow('[Test] Ping test'));
			try {
				const response = await OrderUtils.ping();
				if (response === 'pong') {
					logger.success(chalk.green('Correct server response:'));
					logger.debug(chalk.white(response));
				}
				else {
					logger.error(chalk.red('Incorrect server response:'));
					logger.debug(chalk.white(response));
				}
			}
			catch(err) {
				logger.error(err);
			}
			console.log();
			// End test

			/**
			 * Create a New Order
			 */
			logger.info(chalk.yellow('[Test] Create a new order'));
			try {
				const newOrder = {
					'orderName': 'Order created for test',
					'orderDescription': 'Touch Free Delivery',
					'orderType': 'To Go',
					'sandwichName': 'Tomato Mozzarella',
					'breadType': 'Gluten Free Bread',
					'snackName': 'Apple',
					'drinkName': 'Hot Coffee',
					'drinkSize': 'Large Drink',
					'created': new Date,
					'updated': new Date
				};
				const response = await OrderUtils.createNewOrder(newOrder);
				if (response && response.status === 'success') {
					logger.success(chalk.green('Correct server response:'));
					console.dir(response);
					newOrderId = response.data._id;
				}
				else {
					logger.error(chalk.red('Incorrect server response:'));
					console.dir(response);
				}
			}
			catch(err) {
				logger.error(err);
			}
			console.log();
			// End test

			/**
			 * Update a New Order
			 */
			logger.info(chalk.yellow('[Test] Updating previously created order'));
			try {
				const updatedOrder = {
					'orderId': newOrderId,
					'orderName': 'Updated Order',
					'orderDescription': 'Touch Free Delivery',
					'orderType': 'Here',
					'sandwichName': 'Tomato Mozzarella',
					'breadType': 'Gluten Free Bread',
					'snackName': 'Banana',
					'drinkName': 'Hot Coffee',
					'drinkSize': 'Large Drink',
					'updated': new Date
				};
				const response = await OrderUtils.updateOrder(updatedOrder);
				if (response && response.status === 'success') {
					logger.success(chalk.green('Correct server response:'));
					console.dir(response);
				}
				else {
					logger.error(chalk.red('Incorrect server response:'));
					console.dir(response);
				}
			}
			catch(err) {
				logger.error(err);
			}
			console.log();
			// End test

			/**
			 * Fetch an Order
			 */
			logger.info(chalk.yellow(`[Test] Fetching the previously updated order: ${newOrderId}`));
			try {
				const response = await OrderUtils.fetchOrder(newOrderId);
				if (response && response.status === 'success') {
					logger.success(chalk.green('Correct server response:'));
					console.dir(response);
				}
				else {
					logger.error(chalk.red('Incorrect server response:'));
					console.dir(response);
				}
			}
			catch(err) {
				logger.error(err);
			}
			console.log();
			// End test

			/**
			 * Fetch all the Orders
			 */
			logger.info(chalk.yellow('[Test] Fetching all the orders'));
			try {
				const response = await OrderUtils.fetchAllOrders();
				if (response && response.status === 'success') {
					logger.success(chalk.green('Correct server response:'));
					console.dir(response);
				}
				else {
					logger.error(chalk.red('Incorrect server response:'));
					console.dir(response);
				}
			}
			catch(err) {
				logger.error(err);
			}
			console.log();
			// End test

			/**
			 * Delete a Order
			 */
			logger.info(chalk.yellow(`[Test] Deleting the recently created order: ${newOrderId}`));
			try {
				const response = await OrderUtils.deleteOrder(newOrderId);
				if (response && response.status === 'success') {
					logger.success(chalk.green('Correct server response:'));
					console.dir(response);
				}
				else {
					logger.error(chalk.red('Incorrect server response:'));
					console.dir(response);
				}
			}
			catch(err) {
				logger.error(err);
			}
			console.log();
			// End test

			/**
			 * Delete all the Orders
			 */
			logger.info(chalk.yellow('[Test] Deleting all the orders'));
			try {
				const response = await OrderUtils.deleteAllOrders();
				if (response && response.status === 'success') {
					logger.success(chalk.green('Correct server response:'));
					console.dir(response);
				}
				else {
					logger.error(chalk.red('Incorrect server response:'));
					console.dir(response);
				}
			}
			catch(err) {
				logger.error(err);
			}
			console.log();
			// End test

			/**
			 * Fetch an unexisting Order
			 */
			logger.info(chalk.yellow(`[Test] Fetching an unexisting order: ${newOrderId}`));
			try {
				await OrderUtils.fetchOrder(newOrderId);
			}
			catch(err) {
				logger.error(err);
			}
			console.log();
			// End test

			/**
			 * Delete an unexisting Order
			 */
			logger.info(chalk.yellow(`[Test] Deleting an unexisting order: ${newOrderId}`));
			try {
				await OrderUtils.deleteOrder(newOrderId);
			}
			catch(err) {
				logger.error(err);
			}
			console.log();
			// End test

			/**
			 * Done with all the tests, so let's resolve
			 */
			resolve();
		});
	};
}

module.exports.ApiTests = ApiTests;