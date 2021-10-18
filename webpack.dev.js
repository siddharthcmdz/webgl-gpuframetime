const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const common = require("./webpack.common")
const {merge} = require("webpack-merge")

module.exports = merge(common, {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
});
