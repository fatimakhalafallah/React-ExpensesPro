// entry point   -- out put of file
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env)=>{
     const isProduction = env === 'producation';
     const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
        entry:'./src/app.js',
        // entry:'./src/playground/hoc.js',
         output:{
             path:path.join(__dirname,'public','dist'),
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
             use:CSSExtract.extract({
                use:
                [ {
                     loader:'css-loader',
                     options: {
                        sourceMap: true
                      }
                   },
                     {
                         loader:'sass-loader',
                         options: {
                            sourceMap: true
                          }
                     } 
                ] 
             })
               
             // to allow use array of loader
         }]
         } ,
         plugins:[CSSExtract],
         devtool: isProduction ? 'source-map':'inline-source-map', // change source map for style cheap-module-eval-source-map
         devServer:{
             contentBase:path.join(__dirname,'public'),
             historyApiFallback:true, // to retur index.html each time 404 erroor
             publicPath: '/dist/'
         }


    }
};