/* eslint-disable import/no-commonjs */
/* eslint-disable import/unambiguous */

module.exports = {
	extends: [
		'canonical',
		'canonical/typescript',
		'canonical/node',
		'canonical/react',
		'plugin:prettier/recommended',
		'prettier/react',
		'prettier/@typescript-eslint',
		'prettier/babel'
	],
	parserOptions: {
		project: './tsconfig.eslint.json'
	},
	rules: {
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/triple-slash-reference': 'off',
		'filenames/match-exported': 'off',
		'filenames/match-regex': 'off',
		'fp/no-class': 'off',
		'no-inline-comments': 'off',
		'node/no-missing-import': 'off',
		'node/no-process-env': 'off',
		'prettier/prettier': 'error',
		'react/prop-types': 'off'
	},
	settings: {
		'import/resolver': {
			typescript: {}
		},
		react: {
			version: 'detect'
		}
	}
}
