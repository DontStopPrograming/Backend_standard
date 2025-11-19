import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: {

    },

    rules: {
      "import/extensions": ["error", "ignorePackages", {
        "js": "always",
        "ts": "never",
      }]

    },

    extends: [
      js.configs.recommended,
      "plugin:import/recommended",
      "plugin:import/typescript"
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        sourceType: "module",
      }
    }
  },
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts, mts, cts}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      }
    }
  }
]);
