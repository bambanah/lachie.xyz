/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:astro/recommended",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"prettier",
	],
	rules: {
		"@typescript-eslint/no-var-requires": "off",
	},
	overrides: [
		{
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
		},
	],
	settings: {
		"import/resolver": {
			typescript: true,
			node: true,
		},
	},
};
