module.exports = {
  root: true,
  env: {
    jest: true,
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    "next/core-web-vitals",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  plugins: ["import", "prettier"],
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
  overrides: [
    {
      files: ["**/*.+(ts|tsx)", "**/*.stories.*"],
      rules: {
        "import/no-anonymous-default-export": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "react-hooks/exhaustive-deps": "off",
      },
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: ["plugin:@typescript-eslint/recommended"],
    },
  ],
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
