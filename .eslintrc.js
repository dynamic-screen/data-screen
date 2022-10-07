module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'max-len': ['error', { code: 1000 }],
        'quote-props': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'comma-style': ['error', 'last'],
        semi: ['error', 'always'],
        quotes: [
            2,
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
    },
};
