/** @type {import('@types/eslint').Linter.Config} */
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
				'spaced-comment': 'off',
				'unicorn/prevent-abbreviations': 'off'
			}
		},
		{
			files: ['_document.tsx'],
			rules: {
				'fp/no-class': 'off'
			}
		},
		{
			files: ['_*.tsx', '.*.js', '*.d.ts', '*.config.js'],
			rules: {
				'filenames/match-regex': 'off'
			}
		},
		{
			files: ['src/api/*.ts'],
			rules: {
				'unicorn/prevent-abbreviations': 'off'
			}
		}
	],
	parserOptions: {
		project: './tsconfig.eslint.json'
	},
	root: true,
	rules: {
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/triple-slash-reference': 'off',
		'filenames/match-exported': 'off',
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
