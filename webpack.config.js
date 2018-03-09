const webpack = require('webpack');
const path = require('path');
const applications = require('./portal/applications.config.json');

const devApplications = {
  menu: 'http://localhost:4200',
  home: 'http://localhost:4201',
  app1: 'http://localhost:4202',
  help: 'http://localhost:4203'
};

module.exports = {
  entry: [
    __dirname + '/portal/main.js',
    __dirname + '/portal/main.css'
  ],
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
    proxy: getProxyConfig(applications, devApplications),
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

function getProxyConfig(applications, devApplications) {
  const proxy = {};
  for (const appName of Object.keys(devApplications)) {
    const application = applications.find(a => a.name === appName);
    const path = application.outputPath + '/';
    proxy[path] = {
      target: devApplications[appName],
      pathRewrite: {
        [path]: ''
      },
      bypass: function (req, res, proxyOptions) {
        if (req.headers.accept.indexOf('html') !== -1) {
          return '/index.html';
        }
      }
    };
  }
  return proxy;
}
