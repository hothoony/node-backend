const path = require('path');
const { webpack } = require('webpack');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const nodeExternals = require('webpack-node-externals');

const {
    NODE_ENV = 'development',
} = process.env;

module.exports = {
    name: 'express-webpack-build-app',
    mode: NODE_ENV,
    target: 'node',
    resolve: {
        extensions: ['.ts', '.js'],
        // extensions: ['.js'],
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
    plugins: [
        new LoaderOptionsPlugin({ debug: true }), 
    ],
    // externals: [ nodeExternals() ], // node_modules 를 번들링에 포함하지 않는다
}
