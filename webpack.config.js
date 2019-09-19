const path = require('path');
const htmlWebPlugin = require('html-webpack-plugin');
const flatpickr = require('flatpickr');
module.exports = {
    entry: ['@babel/polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    target: "web",
    devServer: {
        contentBase: './dist'
    },

    plugins: [
        new htmlWebPlugin({
            filename: 'index.html',
            template: './dist/index.html'
        })
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
      },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}