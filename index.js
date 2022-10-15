const coreRules = require('./rules/core');
const corePlugins = require('./plugins/core');

/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 8,
		sourceType: 'module',
	},
	extends: ['eslint:recommended'],
	ignorePatterns: ['node_modules/*'],
	plugins: [...corePlugins],
	rules: {
		...coreRules,
	},
};
