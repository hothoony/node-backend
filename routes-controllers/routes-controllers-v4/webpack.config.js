const path = require('path');
// const { webpack } = require('webpack');
// const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

const {
    NODE_ENV = 'development',
} = process.env;

const nodeExternals = require('webpack-node-externals');

module.exports = {
    name: 'express-webpack-build-app',
    mode: NODE_ENV,
    target: 'node',
    resolve: {
        // extensions: ['.ts', '.js'],
        extensions: ['.js'],
    },
    entry: {
        app: ['./index.js'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: `index-${NODE_ENV}.js`
    },
    module: {
        rules: [
            // {
            //     test: /\.ts$/,
            //     use: [
            //         'ts-loader',
            //     ]
            // }
        ]
    },
    externals: [ nodeExternals() ],
}
