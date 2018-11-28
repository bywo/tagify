module.exports = {
  parser: "babel-eslint",
  parserOptions: { ecmaVersion: 8 },
  extends: ["airbnb", "prettier"],
  rules: {
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
  },
  env: {
    browser: true,
  },
};
