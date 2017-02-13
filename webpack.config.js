var path = require('path');

module.exports = {
    entry: './entry.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'}
        ],
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader"}
        ]

         
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8090
    }

};
