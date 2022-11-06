const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader']
            },
            {
                test:/\.(png|jpeg|jpg|svg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test:/\.(woff|woff2|eot|tff|otf)$/i,
                type: 'asset/resource',
            }
        ],
    },
}