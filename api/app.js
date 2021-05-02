const env = require('node-env-file');
const express = require('express');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('log-util');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// Load any undefined ENV variables form a specified file.
// env(__dirname + '/.env');

// Connect to the database
mongoose.connect(`mongodb+srv://${process.env.harvardDbUsername}:${process.env.harvardDbPassword}@cluster0-kgyed.mongodb.net/e28-project?retryWrites=true&w=majority`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('open', () => {
	logger.debug('Database connection established');
}).catch((err) => {
	logger.error('Database connection failed:', err.message);
});

app.set('views', path.join(__dirname, './views')); // tells express where to find the views
app.set('view engine', 'pug'); // tells express to use pug as the template engine

app.use(cookieParser()); // access cookies through req.cookies.token

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
	extended: true
})); // support encoded bodies

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/', routes('apiTests'));
app.use('/data', routes('data'));

// Error handling

app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

module.exports = app;