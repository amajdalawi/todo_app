const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].omg.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader']
            },
        ],
    },
}