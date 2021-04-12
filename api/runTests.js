const {exec} = require('child_process');
const ps = require('ps-node');
const env = require('node-env-file');
const logger = require('log-util');
const chalk = require('chalk');
const apiTests = require('./tests/api/apiTests');
const ApiTests = apiTests.ApiTests;

/**
 * Setup the environment
 */
// Load any undefined ENV variables form a specified file.
env(__dirname + '/.env');

/**
 * Methods
 */

 // Execute a OS Command
const osFunc = ((cmd, callback) => {
	return new Promise((resolve, reject) => {
		exec(cmd, (error, stdout, stderr) => {
			if (error || stderr) {
				logger.error(error);
				logger.error(stderr);
				reject (new Error(error));
			}
			resolve (callback(stdout));
		});
	});
});

// Kill Application
const killApplication = ((command, psargs) => {
	ps.lookup({
		command,
		psargs
		}, (err, resultList) => {
		if (err) {
			logger.error('Failed to kill application', err);
		}
	 
		resultList.forEach((process) => {
			if (process){
				if (process.arguments[0] === './bin/www') {
					logger.debug(chalk.white('Killing application with PID:', process.pid));
					ps.kill( process.pid, (err) => {
						if (err) {
							logger.error('Failed to kill application', err);
						}
						else {
							logger.info(chalk.magenta('Successfully killed the application'));
						}
					});
				}
			}
		});
	});
});

async function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}   

async function runMain() {
	/**
	 * Run Application
	 */
	logger.info(chalk.magenta('Starting the Application'));

	try {
		await osFunc('nohup npm start > /dev/null 2>&1 &', (returnvalue) => {
			console.debug(chalk.white(returnvalue));
		});
		// Wait for 3 seconds for the application to start
		await sleep(3000);
	}
	catch (err) {
		process.exit();
	}

	/**
	 * Run Tests
	 */
	await ApiTests.apiTests();

	/**
	 * Kill Application
	 */
	logger.info(chalk.magenta('Killing the Application'));
	killApplication('node');
};

/**
 * Main Program
 */

 runMain();