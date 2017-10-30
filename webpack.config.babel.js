import webpack from 'webpack';
import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
    entry: './src/index.js',
    output: {
        path: path.join(process.cwd(), 'lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs',
    },
    target: 'node',
    externals: [
        nodeExternals({
            whitelist: ['sequelize']
        }),
        ['pg', 'sqlite3', 'tedious', 'pg-hstore', 'aws-sdk']
    ],
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                },
                exclude: /(node_modules)/,
            },
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /(node_modules)/,
                options: {
                    configFile: '../../.eslintrc.json',
                    fix: false,
                    failOnError: true,
                },
            },
        ]
    },
    plugins: [
        // TODO
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            },
        }),
    ],
};
