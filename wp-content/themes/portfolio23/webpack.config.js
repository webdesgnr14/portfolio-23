const defaults = require('@wordpress/scripts/config/webpack.config');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  ...defaults,
  module: {
    ...defaults.module,
    rules: [
      ...defaults.module.rules,
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new MiniCssExtractPlugin(),
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  }
}
