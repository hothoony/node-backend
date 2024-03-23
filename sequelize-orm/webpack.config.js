const path = require('path');
// const { webpack } = require('webpack');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

const {
    NODE_ENV = 'production',
} = process.env;

const nodeExternals = require('webpack-node-externals');

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
    ],
    externals: [ nodeExternals() ]
}
