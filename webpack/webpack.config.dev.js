var webpack = require('webpack');
const path = require('path');

module.exports = {

    entry: [
        './src/client/index.tsx'
    ],

    output: {
        filename: 'bundle.js',
        path: './dist/',
        publicPath: '/'
    },

    externals: undefined,

    devtool: 'source-map',

    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },

    module: {
        rules: [
            { test: /\.ts|\.tsx/, use: ['awesome-typescript-loader'] },
            { test: /\.css/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.jpe?g$|\.gif$|\.png$|\.ico$/, use: ['file?name=[name].[ext]'] },
            { test: /\.eot|\.ttf|\.svg|\.woff2?/, use: ['file?name=[name].[ext]'] }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                APP_ENV: JSON.stringify('browser')
            }
        })
    ],


};
