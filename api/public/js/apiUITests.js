function testAPIs(inputHostname, inputPort) {

	const hostname = 'localhost';
	const port = '8080';
	let baseURL = `http://${hostname}:${port}`;

	if (inputHostname && inputPort) {
		baseURL = `http://${inputHostname}:${inputPort}`;
	}

	let newOrderId = '';
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

	// ping
	callAPI(baseURL, 'POST', '/data/newOrder', null, newOrder)
	.then((list)=>{
		console.log('\n\n***************************\nnew order:');
		console.log(list);
		newOrderId = list.data._id;

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

		callAPI(baseURL, 'PUT', `/data/updateOrder/${newOrderId}`, null, updatedOrder)
		.then((list)=>{
			console.log('\n\n***************************\nupdated order:');
			console.log(list);

			callAPI(baseURL, 'GET', `/data/listOrder/${newOrderId}`, null, null)
			.then((list)=>{
				console.log('\n\n***************************\nfetch updated order:');
				console.log(list);

				callAPI(baseURL, 'GET', '/data/listOrders', null, null)
				.then((list)=>{
					console.log('\n\n***************************\nfetch all orders:');
					console.log(list);

					callAPI(baseURL, 'DELETE', `/data/deleteOrder/${newOrderId}`, null, null)
					.then((list)=>{
						console.log('\n\n***************************\ndelete the recently created order:');
						console.log(list);

						callAPI(baseURL, 'DELETE', '/data/deleteAllOrders', null, null)
						.then((list)=>{
							console.log('\n\n***************************\ndelete all the orders:');
							console.log(list);

							callAPI(baseURL, 'GET', `/data/listOrder/${newOrderId}`, null, null)
							.then((list)=>{
								console.log('\n\n***************************\nfetch unexisting order:');
								console.log(list);

								callAPI(baseURL, 'DELETE', `/data/deleteOrder/${newOrderId}`, null, null)
								.then((list)=>{
									console.log('\n\n***************************\ndelete unexisting order:');
									console.log(list);
								});
							});
						});
					});
				});
			});
		});
	})
	.catch((err)=>{
	console.error(err);
	});
}


async function callAPI(baseURL, method, uri, params, body){
	jsonMimeType = {
	'Content-type':'application/json'
	}
	try{
	/*  Set up our fetch.
	*   'body' to be included only when method is POST
	*   If 'PUT', we need to be sure the mimetype is set to json
	*      (so bodyparser.json() will deal with it) and the body
	*      will need to be stringified.
	*   '...' syntax is the ES6 spread operator.
	*      It assigns new properties to an object, and in this case
	*      lets us use a conditional to create, or not create, a property
	*      on the object. (an empty 'body' property will cause an error
	*      on a GET request!)
	*/
	var response = await fetch(baseURL + uri, {
		method: method, // GET, POST, PUT, DELETE, etc.
		...(method=='POST' ? {headers: jsonMimeType, body: JSON.stringify(body)} : {}),
		...(method=='PUT' ?  {headers: jsonMimeType, body:JSON.stringify(body)} : {})
	});
	return response.json(); // parses response to JSON
	}catch(err){
	console.error(err);
	return "{'status':'error'}";
	}
}

function loadTests() {
// Calls our test function when we click the button
//  afer validating that there's a file selected.
document.querySelector('#runApiTests').addEventListener("click", ()=>{
	testAPIs(document.querySelector('#hostname').value, document.querySelector('#port').value);
});
}