module.exports = {
	extends: [
		'canonical',
		'canonical/typescript',
		'canonical/node',
		'canonical/react',
		'plugin:prettier/recommended',
		'prettier/@typescript-eslint',
		'prettier/react',
		'prettier/babel'
	],
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-require-imports': 'off',
				'@typescript-eslint/no-var-requires': 'off',
				'import/no-commonjs': 'off',
				'import/unambiguous': 'off'
			}
		},
		{
			files: ['*.d.ts'],
			rules: {
				'import/unambiguous': 'off',
				'spaced-comment': 'off'
			}
		}
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
		'react/prop-types': 'off',
		'unicorn/prevent-abbreviations': 'off'
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
