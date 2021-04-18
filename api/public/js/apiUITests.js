function testAPIs(inputHostname, inputPort) {

	const hostname = 'localhost';
	const port = '8080';
	let baseURL = `http://${hostname}:${port}`;

	if (inputHostname && inputPort) {
		baseURL = `http://${inputHostname}:${inputPort}`;
	}

	let newNoteId = '';
	const newNote = {
		'title': 'newTitle',
		'content': 'newContent',
		'isFavorite': 'false'
	};

	// ping
	callAPI(baseURL, 'POST', '/data/newNote', null, newNote)
		.then((list) => {
			console.log('\n\n***************************\nnew note:');
			console.log(list);
			newNoteId = list.data._id;

			const updatedNote = {
				'title': 'updatedTitle',
				'content': 'updatedContent',
				'isFavorite': 'true'
			};

			callAPI(baseURL, 'PUT', `/data/updateNote/${newNoteId}`, null, updatedNote)
				.then((list) => {
					console.log('\n\n***************************\nupdated note:');
					console.log(list);

					callAPI(baseURL, 'GET', `/data/listNote/${newNoteId}`, null, null)
						.then((list) => {
							console.log('\n\n***************************\nfetch updated note:');
							console.log(list);

							callAPI(baseURL, 'GET', '/data/listNotes', null, null)
								.then((list) => {
									console.log('\n\n***************************\nfetch all notes:');
									console.log(list);

									callAPI(baseURL, 'DELETE', `/data/deleteNote/${newNoteId}`, null, null)
										.then((list) => {
											console.log('\n\n***************************\ndelete the recently created note:');
											console.log(list);

											callAPI(baseURL, 'DELETE', '/data/deleteAllNotes', null, null)
												.then((list) => {
													console.log('\n\n***************************\ndelete all the notes:');
													console.log(list);

													callAPI(baseURL, 'GET', `/data/listNote/${newNoteId}`, null, null)
														.then((list) => {
															console.log('\n\n***************************\nfetch unexisting note:');
															console.log(list);

															callAPI(baseURL, 'DELETE', `/data/deleteNote/${newNoteId}`, null, null)
																.then((list) => {
																	console.log('\n\n***************************\ndelete unexisting note:');
																	console.log(list);
																});
														});
												});
										});
								});
						});
				});
		})
		.catch((err) => {
			console.error(err);
		});
}


async function callAPI(baseURL, method, uri, params, body) {
	jsonMimeType = {
		'Content-type': 'application/json'
	}
	try {
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
			...(method == 'POST' ? {
				headers: jsonMimeType,
				body: JSON.stringify(body)
			} : {}),
			...(method == 'PUT' ? {
				headers: jsonMimeType,
				body: JSON.stringify(body)
			} : {})
		});
		return response.json(); // parses response to JSON
	} catch (err) {
		console.error(err);
		return "{'status':'error'}";
	}
}

function loadTests() {
	// Calls our test function when we click the button
	//  afer validating that there's a file selected.
	document.querySelector('#runApiTests').addEventListener("click", () => {
		testAPIs(document.querySelector('#hostname').value, document.querySelector('#port').value || 80);
	});
}