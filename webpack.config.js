const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/main.js',
  output: {
    path: process.cwd() + '/build',
    filename: '[name].js',
    publicPath: '/build/',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    publicPath: '/build/',
    contentBase: './',
    historyApiFallback: true,
    proxy: {
      /**       
      '/src/apps/menu/dist': {
        target: 'http://localhost:4200',
        pathRewrite: {
          '/src/apps/menu/dist': ''
        }
      },
      */
      /**       
      '/src/apps/home/dist': {
        target: 'http://localhost:4201',
        pathRewrite: {
          '/src/apps/home/dist': ''
        }
      },
      */
      /**
      '/src/apps/app1/dist': {
        target: 'http://localhost:4202',
        pathRewrite: {
          '/src/apps/app1/dist': ''
        }
      },
      */
      /**
      '/src/apps/help/dist': {
        target: 'http://localhost:4203',
        pathRewrite: {
          '/src/apps/help/dist': ''
        }
      }
      */
    }
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, './'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        exclude: /node_modules|svelte/,
        loader: 'html-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: getBabelConfig(),
      }
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
    }),
    // new CopyWebpackPlugin([{ from: 'src/apps/*/dist/**/*', to: '' }])
  ],
};

function getBabelConfig() {
  return {
    presets: [
      ['babel-preset-env', {
        targets: {
          'browsers': ['last 2 versions'],
        },
      }],
    ],
    plugins: [
      'transform-object-rest-spread',
      'transform-class-properties',
      'syntax-dynamic-import',
      'transform-function-bind',
    ],
  };
}
