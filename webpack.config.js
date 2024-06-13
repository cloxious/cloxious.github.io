const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(mp3)$/i,
                type: 'asset/resource',

            },
        ],
    },
    optimization: {
        minimize: true,
    },
};