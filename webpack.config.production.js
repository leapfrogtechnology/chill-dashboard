const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Initialize environment variables
dotenv.config();

const baseHref = process.env.BASE_HREF;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js', // the entry point of our app
  output: {
    publicPath: `/`,
    chunkFilename: '[id].js',
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.[chunkhash].js' // the output bundle
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
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.APP_LOGO': JSON.stringify(process.env.APP_LOGO),
      'process.env.APP_TITLE': JSON.stringify(process.env.APP_TITLE),
      'process.env.API_ENDPOINT': JSON.stringify(process.env.API_ENDPOINT),
      'process.env.APP_LOGO_HEIGHT': JSON.stringify(process.env.APP_LOGO_HEIGHT),
      'process.env.WEBSOCKET_ENDPOINT': JSON.stringify(process.env.WEBSOCKET_ENDPOINT)
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
