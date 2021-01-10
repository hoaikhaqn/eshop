const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js[x]?$/,
                exclude: '/node_modules'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.scss$/i,
                use: 'sass-loader',
            },
            {
                test: /\.(woff2|eot|ttf)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/fonts',
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/images',
                },
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.min.css',
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        open: true,
        disableHostCheck: true,
        historyApiFallback: true,
        overlay: true,
        compress: true,
        stats: 'minimal',
        port: 3000
    }
};