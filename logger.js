'use strict';

/**
 * Логгер
 */
class Logger {
	/**
	 * Логирует информационное сообщение
	 * @param {String} message сообщение в лог
	 */
	static info(message) {
		console.log(message);
	}
}

module.exports = Logger;
