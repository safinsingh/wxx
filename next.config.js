const { resolve } = require('path')

const { merge } = require('webpack-merge')

module.exports = {
	webpack: (config) =>
		merge(config, {
			resolve: {
				alias: {
					'~': resolve('./src')
				}
			}
		})
}
