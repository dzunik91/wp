const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
  filename: 'styles.css'
});

let config = {

  entry: '/src/js/app.js', // entry file
  output: {
    path: path.resolve(__dirname, 'dist'), // ouput path
    filename: 'build.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader', 'postcss-loader']
        })
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    extractPlugin,
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(['dist']),
    /*  new BrowserSyncPlugin(
       // BrowserSync options 
       {
         // browse to http://localhost:3000/ during development 
         host: 'localhost',
         port: 3000,
         // proxy the Webpack Dev Server endpoint 
         // (which should be serving on http://localhost:3100/) 
         // through BrowserSync 
         proxy: 'http://localhost:3100/'
       },
       // plugin options 
       {
         // prevent BrowserSync from reloading the page 
         // and let Webpack Dev Server take care of this 
         reload: false
       }
     ) */
]
}

module.exports = config;