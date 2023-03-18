const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require('glob');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
  return {
    entry: {
      appbundle: glob.sync('./src/**/**.{js,jsx}'),
    },
    output: {
      path: path.join(__dirname, './build/'),
      filename: "[name].js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false
          }
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack', 'url-loader'],
        },
      ]
    },
    plugins: [
      new Dotenv({
        path: path.join(__dirname, `./.env.${env.production ? "production" : "development"}`)
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }),
      new MiniCssExtractPlugin(),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    }
  }
}
