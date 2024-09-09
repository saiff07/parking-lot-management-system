// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//   },
//   extends: ['eslint:recommended', 'plugin:prettier/recommended'],
//   overrides: [
//     {
//       files: ['.eslintrc.{js,cjs}'],
//       parserOptions: {
//         sourceType: 'script',
//       },
//     },
//   ],
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   rules: {},
// };

module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    overrides: [
      {
        files: ['.eslintrc.{js,cjs}'],
        parserOptions: {
          sourceType: 'script',
        },
      },
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      },
    ],
    rules: {
    },
  };
  