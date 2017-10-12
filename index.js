'use strict';

const fs = require('fs');
const Logger = require('./logger');

/**
 * Заменяет function expression на arrow function
 * 
 * @param {Number} file путь к файлу
 * @returns {Promise}
 */
function replaceExpressions(file) {
	return new Promise((resolve, reject) => {
		if (!file) {
			return reject(new Error('File name is missing'));
		}

		fs.readFile(file, 'utf8', (err, data) => {
			if (err) {
				return reject(err);
			}

			const functionRegexp = /function\s?(\([\w\s$,]*\))/g;
			const matches = data.match(functionRegexp);

			if (matches) {
				const result = data.replace(functionRegexp, '$1 =>');

				fs.writeFile(file, result, (err) => {
					if (err) {
						return reject(err);
					}

					Logger.info(`${matches.length} function expressions were replaced`);
					return resolve(matches.length);
				});
			} else {
				Logger.info('No function expressions found');
				return resolve(0);
			}
		});
	});
}

module.exports = replaceExpressions;
