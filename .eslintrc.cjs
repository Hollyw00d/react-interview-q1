module.exports = {
  env: { browser: true, es2020: true },
  extends: ["airbnb", "plugin:jsx-a11y/recommended", "prettier"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "jsx-a11y"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }
    ],
    semi: "error",
    quotes: ["error", "double"],
    "jsx-quotes": ["error", "prefer-double"],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "import/no-absolute-path": "off"
  }
};
