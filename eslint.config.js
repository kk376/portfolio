import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      // 'motion' is used in JSX (e.g., <motion.div>) but ESLint doesn't detect this without eslint-plugin-react
      "no-unused-vars": [
        "error",
        { varsIgnorePattern: "^([A-Z_]|motion$)", ignoreRestSiblings: true },
      ],
      // Note: ESLint recognizes JSX usage via parser configuration above
    },
  },
]);
