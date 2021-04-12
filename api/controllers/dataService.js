// const logger = require('log-util');
const models = require('../models');

class DataService {

	static listNote(id) {
		return new Promise((resolve, reject) => {
			const Notes = models('notes');
			Notes.find({_id: id}).exec((err, docs) => {
				if (err) {
					// logger.error(`Failed to retrieve note: ${id}`, err.message);
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

	static listNotes() {
		return new Promise((resolve, reject) => {
			const Notes = models('notes');
			Notes.find().sort({updated: 'descending'}).exec((err, docs) => {
				if (err) {
					// logger.error('Failed to retrieve notes: ', err.message);
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
  
	static newNote(data) {
		return new Promise((resolve, reject) => {
			const Notes = models('notes');
			const newNotes = new Notes(data);
			newNotes.save((err) => {
				if (err) {
					// logger.error('Failed to save new note: ', err.message);
					reject (new Error(err.message));
				}
				else {
					resolve ({
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
			Notes.findById({_id: id}).exec((err, retrievedNotes) => {
				if (err) {
					// logger.error(`Failed to fetch note number: ${id}`, err.message);
					reject (new Error(err.message));
				}
				else {
					if (retrievedNotes) {
						retrievedNotes.set(data);
						retrievedNotes.save((err) => {
							if (err) {
								// logger.error(`Failed to update note number: ${id}`, err.message);
								reject (new Error(err.message));
							}
							else {
								resolve ({
									status: 'success',
									statusCode: 200,
									message: `success updating Notes Number: ${id}`
								});
							}
						});
					}
					else {
						resolve ({
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
			Notes.findById({_id: id}).exec((err, retrievedNotes) => {
				if (err) {
					// logger.error(`Failed to fetch note number: ${id}`, err.message);
					reject (new Error(err.message));
				}
				else {
					if (retrievedNotes) {
						Notes.deleteOne({_id: id}).exec((err) => {
							if (err) {
								// logger.error(`Failed to remove note number: ${id}`, err.message);
								reject (new Error(err.message));
							}
							else {
								resolve ({
									status: 'success',
									statusCode: 200,
									message: `success deleting Notes Number: ${id}`
								});
							}
						});
					}
					else {
						resolve ({
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
					reject (new Error(err.message));
				}
				else {
					resolve ({
						status: 'success',
						statusCode: 200,
						message: 'success deleting all notes'
					});
				}
			});
		});
	}

  }
  
  module.exports.DataService = DataService;