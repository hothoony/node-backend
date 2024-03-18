const path = require('path');
// const { webpack } = require('webpack');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

const {
    NODE_ENV = 'production',
} = process.env;

const nodeExternals = require('webpack-node-externals');

module.exports = {
    name: 'express-webpack-build-app',
    mode: NODE_ENV,
    target: 'node',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    entry: {
        app: ['./src/index.ts'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ]
            }
        ]
    },
    // watch: NODE_ENV === 'development',
    plugins: [
        // new webpack.LoaderOptionsPlugin({
        new LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            options: {
              context: __dirname
            }
        }),
    ],
    // testEnvironment: 'node',
    // transform: {
    //     "^.+\\.ts$": "ts-jest"
    // },
    externals: [ nodeExternals() ]
}
