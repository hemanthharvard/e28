// const logger = require('log-util');
const models = require('../models');

class DataService {

	static listNote(id) {
		return new Promise((resolve, reject) => {
			const Notes = models('notes');
			Notes.find({
				_id: id
			}).exec((err, docs) => {
				if (err) {
					// logger.error(`Failed to retrieve note: ${id}`, err.message);
					reject(new Error(err.message));
				} else {
					if (docs.length) {
						resolve({
							status: 'success',
							statusCode: 200,
							data: docs
						});
					} else {
						resolve({
							status: 'failed',
							statusCode: 404,
							data: docs
						});
					}
				}
			});
		});
	}

	static listNotes() {
		return new Promise((resolve, reject) => {
			const Notes = models('notes');
			Notes.find().sort({
				updated: 'descending'
			}).exec((err, docs) => {
				if (err) {
					// logger.error('Failed to retrieve notes: ', err.message);
					reject(new Error(err.message));
				} else {
					resolve({
						status: 'success',
						statusCode: 200,
						data: docs
					});
				}
			});
		});
	}

	static newNote(data) {
		return new Promise((resolve, reject) => {
			const Notes = models('notes');
			const newNotes = new Notes(data);
			newNotes.save((err) => {
				if (err) {
					// logger.error('Failed to save new note: ', err.message);
					reject(new Error(err.message));
				} else {
					resolve({
						status: 'success',
						statusCode: 200,
						data: newNotes
					});
				}
			})
		});
	}

	static updateNote(id, data) {
		return new Promise((resolve, reject) => {
			const Notes = models('notes');
			Notes.findById({
				_id: id
			}).exec((err, retrievedNotes) => {
				if (err) {
					// logger.error(`Failed to fetch note number: ${id}`, err.message);
					reject(new Error(err.message));
				} else {
					if (retrievedNotes) {
						retrievedNotes.set(data);
						retrievedNotes.save((err) => {
							if (err) {
								// logger.error(`Failed to update note number: ${id}`, err.message);
								reject(new Error(err.message));
							} else {
								resolve({
									status: 'success',
									statusCode: 200,
									message: `success updating Notes Number: ${id}`
								});
							}
						});
					} else {
						resolve({
							status: 'failed',
							statusCode: 404,
							message: `Notes Number: ${id} not found`
						});
					}
				}
			});
		});
	}

	static deleteNote(id) {

		return new Promise((resolve, reject) => {
			const Notes = models('notes');
			Notes.findById({
				_id: id
			}).exec((err, retrievedNotes) => {
				if (err) {
					// logger.error(`Failed to fetch note number: ${id}`, err.message);
					reject(new Error(err.message));
				} else {
					if (retrievedNotes) {
						Notes.deleteOne({
							_id: id
						}).exec((err) => {
							if (err) {
								// logger.error(`Failed to remove note number: ${id}`, err.message);
								reject(new Error(err.message));
							} else {
								resolve({
									status: 'success',
									statusCode: 200,
									message: `success deleting Notes Number: ${id}`
								});
							}
						});
					} else {
						resolve({
							status: 'failed',
							statusCode: 404,
							message: `Notes Number: ${id} not found`
						});
					}
				}
			});
		});

	}

	static deleteNotes() {
		return new Promise((resolve, reject) => {
			const Notes = models('notes');
			Notes.deleteMany().exec((err, docs) => {
				if (err) {
					// logger.error(`Failed to remove all notes: `, err.message);
					reject(new Error(err.message));
				} else {
					resolve({
						status: 'success',
						statusCode: 200,
						message: 'success deleting all notes'
					});
				}
			});
		});
	}

}

class UserService {

	static newUser(data) {
		return new Promise((resolve, reject) => {
			const Users = models('users');
			const newUsers = new Users(data);
			newUsers.save((err) => {
				if (err) {
					// logger.error('Failed to save new note: ', err.message);
					reject(new Error(err.message));
				} else {
					resolve({
						status: 'success',
						statusCode: 200,
						data: newUsers
					});
				}
			})
		});
	}

	static fetchUser(username) {
		return new Promise((resolve, reject) => {
			const Users = models('users');
			Users.find({
				username
			}).exec((err, docs) => {
				if (err) {
					// logger.error(`Failed to retrieve note: ${id}`, err.message);
					reject(new Error(err.message));
				} else {
					if (docs.length) {
						resolve({
							status: 'success',
							statusCode: 200,
							data: docs
						});
					} else {
						resolve({
							status: 'failed',
							statusCode: 404,
							data: docs
						});
					}
				}
			});
		});
	}

	static fetchUsers() {
		return new Promise((resolve, reject) => {
			const Users = models('users');
			Users.find().sort({
				created: 'descending'
			}).exec((err, docs) => {
				if (err) {
					// logger.error('Failed to retrieve notes: ', err.message);
					reject(new Error(err.message));
				} else {
					resolve({
						status: 'success',
						statusCode: 200,
						data: docs
					});
				}
			});
		});
	}

	static updateUser(username, data) {
		return new Promise((resolve, reject) => {
			const Users = models('users');
			Users.find({
				username
			}).exec((err, retrievedUsers) => {
				if (err) {
					// logger.error(`Failed to fetch username: ${username}`, err.message);
					reject(new Error(err.message));
				} else {
					if (retrievedUsers && retrievedUsers[0]) {
						retrievedUsers[0].set(data);
						retrievedUsers[0].save((err) => {
							if (err) {
								// logger.error(`Failed to update username: ${username}`, err.message);
								reject(new Error(err.message));
							} else {
								resolve({
									status: 'success',
									statusCode: 200,
									message: `success updating username: ${username}`
								});
							}
						});
					} else {
						resolve({
							status: 'failed',
							statusCode: 404,
							message: `Username: ${username} not found`
						});
					}
				}
			});
		});
	}

	static deleteUser(username) {

		return new Promise((resolve, reject) => {
			const Users = models('users');
			Users.find({
				username
			}).exec((err, retrievedUsers) => {
				if (err) {
					// logger.error(`Failed to fetch note number: ${id}`, err.message);
					reject(new Error(err.message));
				} else {
					if (retrievedUsers) {
						Users.deleteOne({
							username
						}).exec((err) => {
							if (err) {
								// logger.error(`Failed to remove username: ${username}`, err.message);
								reject(new Error(err.message));
							} else {
								resolve({
									status: 'success',
									statusCode: 200,
									message: `success deleting username: ${username}`
								});
							}
						});
					} else {
						resolve({
							status: 'failed',
							statusCode: 404,
							message: `Username: ${username} not found`
						});
					}
				}
			});
		});

	}

	static deleteUsers() {
		return new Promise((resolve, reject) => {
			const Users = models('users');
			Users.deleteMany().exec((err, docs) => {
				if (err) {
					// logger.error(`Failed to remove all users: `, err.message);
					reject(new Error(err.message));
				} else {
					resolve({
						status: 'success',
						statusCode: 200,
						message: 'success deleting all users'
					});
				}
			});
		});
	}

}

module.exports.DataService = DataService;
module.exports.UserService = UserService;