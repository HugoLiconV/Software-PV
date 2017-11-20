import path from 'path'
import _ from 'lodash'

const requireProcessEnv = (name) => {
	if (!process.env[name]) {
		throw new Error('You must set the ' + name + ' environment variable')
	}
	return process.env[name]
}


if (process.env.NODE_ENV !== 'production') {
	const dotenv = require('dotenv-safe')
	dotenv.load({
		path: path.join(__dirname, '../.env'),
		sample: path.join(__dirname, '../.env.example')
	})
}

const user = requireProcessEnv('USER_DB')
const psw = requireProcessEnv('USER_PWD')

const config = {
	all: {
		env: process.env.NODE_ENV || 'development',
		root: path.join(__dirname, '..'),
		port: process.env.PORT || 9000,
		ip: process.env.IP || '0.0.0.0',
		mongo: {
			options: {
				db: {
					safe: true
				}
			}
		}
	},
	test: {
		mongo: {
			uri: 'mongodb://localhost/software-PV-test',
			options: {
				debug: false
			}
		}
	},
	development: {
		mongo: {
			uri: 'mongodb://localhost/software-PV-dev',
			options: {
				debug: true
			}
		}
	},
	production: {
		ip: process.env.IP || undefined,
		port: process.env.PORT || 8080,
		mongo: {
			uri: process.env.MONGODB_URI || `mongodb://${user}:${psw}@ds113626.mlab.com:13626/software-pv`
		}
	}
}

module.exports = _.merge(config.all, config[config.all.env])
export default module.exports
