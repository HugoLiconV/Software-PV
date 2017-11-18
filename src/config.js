import path from 'path'
import _ from 'lodash'

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
			uri: 'mongodb://localhost/rest-test',
			options: {
				debug: false
			}
		}
	},
	development: {
		mongo: {
			uri: 'mongodb://localhost/rest-dev',
			options: {
				debug: true
			}
		}
	},
	production: {
		ip: process.env.IP || undefined,
		port: process.env.PORT || 8080,
		mongo: {
			uri: process.env.MONGODB_URI || 'mongodb://localhost/rest'
		}
	}
}

module.exports = _.merge(config.all, config[config.all.env])
export default module.exports
