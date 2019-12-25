var path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './app/app.js',
    devtool: 'source-map',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/' // public URL of the output directory when referenced in a browser
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};