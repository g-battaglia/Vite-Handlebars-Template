import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config} */
export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            globals: globals.browser,
        },
    },
    {
        files: ['vite.config.js'],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
    pluginJs.configs.recommended,
];
