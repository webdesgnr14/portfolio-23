import webpack from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { glob } from 'glob';
import path from 'path';
import Dotenv from 'dotenv-webpack';

export default (env) => {
  const baseDir = path.resolve(process.cwd());
  const entryFiles = glob.sync(path.resolve(baseDir, 'src/**/*.{js,jsx}'));
  return {
    entry: {
      appbundle: entryFiles,
    },
    output: {
      path: path.join(baseDir, './build/'),
      filename: "[name].js",
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
        path: path.join(baseDir, `./.env.${env.production ? "production" : "development"}`)
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
    mode: env.production ? 'production' : 'development',
  }
}
