let log4js = require('log4js')
let logger = log4js.getLogger()

logger.level = 'debug'

module.exports = {
	debug: (debug) => {
		logger.debug(debug)
	},
	info: (info) => {
		logger.info(info)
	},
	warn: (warn) => {
		logger.warn(warn)
	},
	error: (err) => {
		logger.error(err)
	},
	fatal: (fatal) => {
		logger.fatal(fatal)
	}
}