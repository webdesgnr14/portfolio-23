import webpack from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from 'path';
import Dotenv from 'dotenv-webpack';

export default (env) => {
  const baseDir = path.resolve(process.cwd());
  const isProduction = Boolean(env.production);

  return {
    entry: {
      appbundle: path.resolve(baseDir, 'src/index.js'),
    },
    output: {
      path: path.join(baseDir, './build/'),
      filename: "[name].js",
      chunkFilename: "[name].chunk.js",
      publicPath: "auto",
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
        path: path.join(baseDir, `./.env.${isProduction ? "production" : "development"}`)
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
    },
    devtool: isProduction ? false : 'source-map',
    mode: isProduction ? 'production' : 'development',
    externals: {
      jquery: "jQuery",
    },
  }
}
