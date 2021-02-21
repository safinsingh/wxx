const path = require('path')

/** @type {import('next/dist/next-server/server/config').NextConfig} */
module.exports = {
	reactStrictMode: true,
	webpack: (config) => {
		config.resolve.alias['~'] = path.resolve('./src')
		config.resolve.alias['~/api'] = path.resolve('./pages/api')
		return config
	}
}
