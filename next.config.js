const { resolve } = require('path')

module.exports = {
	webpack: (config) => {
		config.resolve.alias['~'] = resolve('./src')
		config.resolve.alias['~/api'] = resolve('./pages/api')
		return config
	}
}
