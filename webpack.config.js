const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
        // new CopyPlugin({
        //     patterns: [
        //         {from: './src/index.css', to: '.'}
        //     ]
        // })
    ],
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    }
}