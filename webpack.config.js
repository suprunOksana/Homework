const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: './src/index.js',
    plugins: [
      new MiniCssExtractPlugin(),
    ],
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 8080,
      watchContentBase: true,
      progress: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
              test: /\.(css|scss)$/,
              use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader'
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};