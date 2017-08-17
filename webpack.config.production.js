const path = require('path');
const webpack = require('webpack');
const { init } = require('chill-core');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Configure Webpack.
 *
 * TODO: Extract common config.
 *
 * @returns {Promise}
 */
async function configureWebpack() {
  const config = await init();
  const baseHref = config.dashboard.baseHref;

  return {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js', // the entry point of our app
    output: {
      publicPath: `/`,
      chunkFilename: '[id].js',
      filename: 'js/bundle.[chunkhash].js', // the output bundle
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: `file-loader?name=[name].[ext]&publicPath=/${baseHref}/images/&outputPath=/images/`
        },
        {
          test: /\.ico$/,
          use: 'file-loader?name=[name].[ext]&publicPath=/images/&outputPath=/'
        },
        {
          test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          use: `file-loader`
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('css/bundle.css'),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html')
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        '__INJECTED_CONFIG.dashboard': JSON.stringify(config.dashboard)
      }),
      new webpack.optimize.UglifyJsPlugin()
    ]
  };
}

module.exports = configureWebpack();
