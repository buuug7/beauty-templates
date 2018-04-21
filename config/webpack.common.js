const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {

  entry: {
    index: './src/js/pages/index.js',
    wedding: './src/js/pages/wedding.js',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },


  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                minimize: false,
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              useRelativePath: true,
            }
          }
        ]
      },

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['../dist'], {
      allowExternal: true,
    }),
    new HtmlWebpackPlugin({
      title: 'index',
      chunks: ['index', 'vendors'],
      filename: 'index.html',
      template: './src/template.html'
    }),
    new HtmlWebpackPlugin({
      title: 'wedding',
      chunks: ['wedding', 'vendors'],
      filename: 'wedding.html',
      template: './src/template.html'
    }),

    new ExtractTextPlugin('styles.css'),

    new FaviconsWebpackPlugin('./src/favicon.png')

  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
}