/* RIP */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-commonjs */
/* eslint-disable import/unambiguous */
/* eslint-disable @typescript-eslint/unbound-method */

const { resolve } = require('path')

/** @type {import('next/dist/next-server/server/config').NextConfig} */
module.exports = {
	future: {
		webpack5: true
	},
	webpack: (config) => {
		config.resolve.alias['~'] = resolve('./src')
		config.resolve.alias['~/api'] = resolve('./pages/api')

		return config
	}
}
