module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    arrowParens: 'avoid',
    bracketSameLine: true,
    bracketSpacing: false,
    singleQuote: true,
    parser: 'flow',
    trailingComma: 'all',
  },
};
