const webpack = require("webpack");
const path = require("path");

module.exports = {
    context: path.resolve(__dirname, "./src"),
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "./dist/assets"),
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, "./dist"),
        historyApiFallback: {
            index: 'index.html'
        },
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["latest", "stage-0", "react"]
                        }
                    }
                ]
            },
            {
                test: /.json$/,
                exclude: /(node_modules)/,
                use: [{ loader: "json-loader" }]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    { loader: "postcss-loader" }
                ]
            }
        ]
    }
};