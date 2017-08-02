var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'app/app.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015','react']
      }
    },
    /*css in html
    {
      test: /\.less$/, 
      loader: 'style-loader!css-loader!less-loader'
    },
    */
    {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
    },
    {
　　　 test: /\.(png|jpg|gif)$/,
　　　 loader: 'url-loader?limit=8192&name=assets/images/[name].[ext]'
　　}
    ]
  },
  plugins:[
    new ExtractTextPlugin('styles.css')
  ],
  devServer:{
      port:8888,
      proxy: {  
        '/api/*': {  
          target: 'http://localhost:8080',  
          secure: false  
        }  
      }  
  }
}