import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      js
    },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "error",
      "no-console": "off",
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],
    },
    languageOptions: {
      globals: globals.node,
    }
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs"
    }
  },
]);
