const { resolve } = require('path')

/** @type {import('next/dist/next-server/server/config').NextConfig} */
module.exports = {
	webpack: (config) => {
		config.resolve.alias['~'] = resolve('./src')
		config.resolve.alias['~/api'] = resolve('./pages/api')
		return config
	},
	future: {
		webpack5: true
	}
}
