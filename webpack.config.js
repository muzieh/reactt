var path = require('path');

module.exports = {
    entry: './entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'}
        ] 
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8080
    }

};
