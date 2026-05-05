const js = require("@eslint/js");

const nodeGlobals = {
  require: "readonly",
  module: "readonly",
  exports: "readonly",
  process: "readonly",
  console: "readonly",
  __dirname: "readonly",
  __filename: "readonly",
  URL: "readonly",
  structuredClone: "readonly",
  setTimeout: "readonly",
  clearTimeout: "readonly",
  Buffer: "readonly",
};

module.exports = [
  js.configs.recommended,

  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: nodeGlobals,
    },
    rules: {
      // catch common bugs
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-undef": "error",
      "no-console": "off", // console.log is used throughout for build logging
      "no-shadow": "warn",
      "no-param-reassign": "warn",

      // code style (minimal)
      eqeqeq: ["error", "always"],
      "no-var": "error",
      "prefer-const": "warn",
      curly: ["error", "all"],
    },
  },

  {
    // ignore generated output and config files
    ignores: ["_site/**", "node_modules/**"],
  },
];
