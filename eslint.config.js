import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default [
	{
		ignores: ['build/**', 'node_modules/**', 'vendor/**', 'docs/**'],
	},
	js.configs.recommended,
	react.configs.flat.recommended,
	react.configs.flat['jsx-runtime'],
	reactHooks.configs.flat['recommended-latest'],
	jsxA11y.flatConfigs.recommended,
	{
		files: ['**/*.{js,jsx}'],
		settings: {
			react: {
				version: '19.2',
			},
		},
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
			},
			parserOptions: {
				ecmaFeatures: { jsx: true },
			},
		},
		rules: {
			// This project has no prop-types package and no runtime prop
			// validation anywhere; enforcing it would mean introducing that
			// convention project-wide rather than fixing an actual defect.
			'react/prop-types': 'off',
		},
	},
	{
		// Node-context config files, not browser code.
		files: ['vite.config.js', 'postcss.config.js', 'eslint.config.js'],
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
	prettierConfig,
];
