const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
    'created': Date,
    'updated': Date,
    'username': {
        type: String,
        required: true
    },
    'title': {
        type: String,
        required: true
    },
    'isFavorite': {
        type: Boolean,
        required: true
    },
    'content': String,
}, {
    strict: true,
    timestamps: true
});

const Notes = mongoose.model('notes', notesSchema);

module.exports = Notes;