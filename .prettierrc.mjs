// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      oprions: {
        parser: 'astro',
      },
    },
  ],
  semi: false,
  printWidth: 85,
  singleQuote: true,
  tabWidth: 2,
}
