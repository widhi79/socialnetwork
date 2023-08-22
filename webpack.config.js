const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  //mode: 'development',
  entry: {
    index:'./src/main.ts',
    app: './src/app/app.css' 
  },
  devtool: false,
  output: {
    clean: true,
    path: __dirname + '/dist',
    filename: 'app.[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.ts','.js']
  },
  module: {
    rules: [
        {test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/},
        {
          test: /\.css$/, exclude: /node_modules/,
          oneOf: [
            {
              resourceQuery: {
                  not: [/\?ngResource/]
              },
              use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
            },
            {
              type: "asset/source",
              loader: "postcss-loader"
            }
          ]
        }
        /*{test: /\.html$/, loader: 'html-loader' },*/
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: __dirname + '/src/index.html',
        output: __dirname + '/dist',
        inject: 'head'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "**/*.html",
          to: path.resolve(__dirname, "dist", "[name].html"),
          context: "src/app/"
        },
        {
          from: "**/*.css",
          to: path.resolve(__dirname, "dist", "[name].css"),
          context: "src/app/"
        },
        {
          from: __dirname + '/src/assets/',
          to: 'assets'
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ],
  devServer: {
    compress: true,
    port: 5005,
    historyApiFallback: true
  },
  optimization: {
    splitChunks: {
       chunks: 'all',
       maxAsyncRequests: Infinity,
       minSize: 0,
       name: 'vendor'
    },
    runtimeChunk: 'single'
  }
}