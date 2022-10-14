module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 8,
		sourceType: 'module',
	},
	ignorePatterns: ['node_modules/*'],
	extends: ['eslint:recommended', '@marcdonald'],
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],
			parser: '@typescript-eslint/parser',
			settings: {
				react: {
					version: 'detect',
				},
			},
			env: {
				browser: true,
				node: true,
				es6: true,
			},
			extends: ['plugin:react-hooks/recommended'],
			rules: {
				'react/prop-types': 'off',
				'react/react-in-jsx-scope': 'off',
				'jsx-a11y/anchor-is-valid': 'off',
			},
		},
	],
};
