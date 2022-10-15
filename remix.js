const coreRules = require('./rules/core');
const reactRules = require('./rules/react');
const corePlugins = require('./plugins/core');

/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution');

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
	overrides: [
		{
			files: ['**/*.ts?(x)'],
			parser: '@typescript-eslint/parser',
			settings: {
				react: {
					version: 'detect',
				},
			},
			extends: ['@remix-run/eslint-config'],
			plugins: [...corePlugins, 'react-hooks'],
			rules: {
				...coreRules,
				...reactRules,
			},
		},
	],
};
