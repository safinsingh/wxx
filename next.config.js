const { resolve } = require('path')

module.exports = {
	webpack(config) {
		config.resolve.alias = {
			...config.resolve.alias,
			'~': resolve('./src')
		}

		return config
	}
}
