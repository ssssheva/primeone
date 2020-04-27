const path = require('path');

module.exports = {
    mode: 'development',
    entry: [
        './src/js/index.js',
        './src/scss/index.scss',
    ],
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'index.js'
    },
    devtool: 'source-map', // any "source-map"-like devtool is possible
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '../css/[name].css',
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader?-url'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
};
