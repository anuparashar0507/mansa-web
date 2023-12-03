// /** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
// const config = {
//   plugins: ["prettier-plugin-tailwindcss"],
// };

// export default config;

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  plugins: [
    "prettier-plugin-tailwindcss",
    "prettier-plugin-jsx",
    "prettier-plugin-typescript",
  ],
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "strict",
  jsxBracketSameLine: true,
  printWidth: 100,
  quoteProps: "as-needed",
  semi: true,
  singleQuote: true,
  trailingComma: "es5",
  useTabs: false,
};

export default config;
