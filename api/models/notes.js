const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
    'created' : Date,
    'updated' : Date,
    'title': {type: String, required: true},
    'content': String,
},
{
    strict: true
});

const Notes = mongoose.model('notes', notesSchema);

module.exports = Notes;