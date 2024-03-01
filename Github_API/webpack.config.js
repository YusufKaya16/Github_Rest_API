var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ["@babel/polyfill", "D:\\Web_Development\\HTML_CSS_JS\\Github_API\\src\\index.js"],

    output: {
        path: path.resolve(__dirname, 'bundles'),
        filename: 'bundle.js'
    },

    mode: "development",

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
};