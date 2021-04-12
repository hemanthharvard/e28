const express = require('express');
const router = express.Router();
const orderUtils = require('../utils/orderUtils');
const OrderUtils = orderUtils.OrderUtils;

/**
 * Home Page
 */
router.get('/', (req, res, next) => {
    res.render('home');
});

/**
 * Test API
 */
router.get('/apiTests', (req, res, next) => {
	res.render('apiTests', {hostname: req.headers.host.split(':')[0], port: req.headers.host.split(':')[1]});
});

/**
 * Form Page
 */
router.get('/form', (req, res, next) => {
    res.render('form');
});

/**
 * Orders Page
 */
router.get('/orders', async(req, res, next) => {
	try {
		const allOrders = await OrderUtils.fetchAllOrders();
		res.render('orders', {orders: allOrders && allOrders.data ? allOrders.data : []});
	}
	catch (e) {
		logger.error('failed to fetch orders, sending default to empty array', e.message);
		res.render('orders', {orders: []});
	}
});

/**
 * Order Update Page
 */
router.get('/orderUpdate/:id', async(req, res, next) => {
	try {
		const order = await OrderUtils.fetchOrder(req.params.id);
		res.render('orderUpdate', {orders: order && order.data ? order.data : []});
	}
	catch (e) {
		logger.error('failed to fetch order, sending default to empty array', e.message);
		res.render('orderUpdate', {orders: []});
	}
});

/**
 * Order Delete Page
 */
router.get('/orderDelete/:id', async(req, res, next) => {
	try {
		const order = await OrderUtils.fetchOrder(req.params.id);
		res.render('orderDelete', {orders: order && order.data ? order.data : []});
		await OrderUtils.deleteOrder(req.params.id);
	}
	catch (e) {
		logger.error('failed to delete order, sending default to empty array', e.message);
		res.render('orderDelete', {orders: []});
	}
});

/**
 * Order Confirmation Page
 */
router.get('/orderConfirmation', async(req, res, next) => {

	const data = req.query;

	if (data && data.orderId) {
		res.render('orderConfirmation', {
			'orderId': data.orderId,
			'orderName': data.orderName,
			'orderDescription': data.orderDescription,
			'orderType': data.orderType,
			'sandwichName': data.sandwichName,
			'breadType': data.breadType,
			'snackName': data.snackName,
			'drinkName': data.drinkName,
			'drinkSize': data.drinkSize
		});
	
		try {
			data.updated = new Date;
			await OrderUtils.updateOrder(data);
		}
		catch (e) {
			logger.error('failed to update order in database', e.message);
		}
	}
	else {
		res.render('orderConfirmation', {
			'orderName': data.orderName,
			'orderDescription': data.orderDescription,
			'orderType': data.orderType,
			'sandwichName': data.sandwichName,
			'breadType': data.breadType,
			'snackName': data.snackName,
			'drinkName': data.drinkName,
			'drinkSize': data.drinkSize
		});
	
		try {
			data.created = new Date;
			data.updated = new Date;
			await OrderUtils.createNewOrder(data);
		}
		catch (e) {
			logger.error('failed to create new order in database', e.message);
		}
	}
});

module.exports = router;