module.exports = {
  root: true,
  env: {
    jest: true,
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["import", "@typescript-eslint", "prettier"],
  extends: [
    "next/core-web-vitals",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  ignorePatterns: [
    ".eslintrc.json",
    ".yarn/*",
    ".next/*",
    "jest.config.js",
    "jest.setup.js",
  ],
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    // react
    "react/prop-types": 0,
    // import
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          ["parent", "sibling"],
          "index",
        ],
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
            position: "after",
          },
        ],
      },
    ],
    // prettier
    "prettier/prettier": "warn",
    // rules
    "no-console": [
      "error",
      {
        allow: ["error", "warn"],
      },
    ],
  },
};
