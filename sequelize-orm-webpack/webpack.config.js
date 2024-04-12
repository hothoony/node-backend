const path = require('path');
// const { webpack } = require('webpack');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');

const {
    NODE_ENV = 'production',
} = process.env;

module.exports = {
    name: 'sequelize-build-app',
    mode: NODE_ENV, // development, production
    target: 'node',
    resolve: {
        extensions: ['.ts', '.js'],
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
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ]
            }
        ]
    },
    plugins: [
        // new webpack.LoaderOptionsPlugin({
        new LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            options: {
              context: __dirname
            }
        }),
        new Dotenv({
            path: `./.env.${NODE_ENV}`,
        }),
    ],
    externalsPresets: { node: true },
    externals: [ nodeExternals() ]
}
