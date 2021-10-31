// entry point   -- out put of file
const path = require('path')

module.exports = {
    entry:'./src/app.js',
   // entry:'./src/playground/hoc.js',
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    } ,
  
    module : { // to enable the babel to work
        rules:[{
            loader:'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
    {
        test: /\.s?css$/, // ? mean the S is optional that mean it can support  both css and scss files
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ] // to allow use array of loader
    }]

    } ,

    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase:path.join(__dirname,'public'),
        historyApiFallback:true // to retur index.html each time 404 erroor
    }

};



