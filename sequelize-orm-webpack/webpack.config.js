const path = require('path');
// const { webpack } = require('webpack');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');

// process.env 에서 NODE_ENV 를 가져온다
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
        path: path.resolve(__dirname, 'build'), // 빌드 경로
        filename: `index-${NODE_ENV}.js` // 빌드 파일명
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
