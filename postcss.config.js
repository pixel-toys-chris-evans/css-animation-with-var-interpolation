module.exports = {
  plugins: [
    "@csstools/postcss-design-tokens",
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
          supports: false,
        },
        stage: 2,
      },
    ],
  ],
};
