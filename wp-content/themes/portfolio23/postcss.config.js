module.exports = {
  plugins: {
    'postcss-px-to-relative-unit': { targetUnit: "rem", htmlFontSize: 16 },
    autoprefixer: {},
    cssnano: {},
  }
}