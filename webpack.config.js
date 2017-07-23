var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader"],
                publicPath: "/dist"
            })
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: true,
        openPage: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack starter',
            //uncomment below code to generate minified html
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            template: './src/index.html'
        }),
        new ExtractTextPlugin("style.css", {
            allChunks: true,
            disable: false
        })
    ]
}