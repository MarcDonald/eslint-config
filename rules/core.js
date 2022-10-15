module.exports = {
	'no-restricted-imports': ['error'],
	'linebreak-style': ['error', 'unix'],
	'import/order': [
		'error',
		{
			groups: [
				'builtin',
				'external',
				'internal',
				'parent',
				'sibling',
				'index',
				'object',
			],
			'newlines-between': 'always',
			alphabetize: {
				order: 'asc',
				caseInsensitive: true,
			},
		},
	],
	'import/default': 'off',
	'import/no-named-as-default-member': 'off',
	'import/no-named-as-default': 'off',
	'@typescript-eslint/no-unused-vars': ['error'],
	'@typescript-eslint/explicit-function-return-type': ['off'],
	'@typescript-eslint/explicit-module-boundary-types': ['off'],
	'@typescript-eslint/no-empty-function': ['off'],
	'@typescript-eslint/no-explicit-any': ['off'],
	'prettier/prettier': ['error', {}],
};
