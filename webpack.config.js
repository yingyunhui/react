var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');//用来分离打包css

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/app.js'),
    common:['react','react-dom','react-router','redux','react-redux','jquery']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    //react格式,es6语法
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015','react']
      }
    },
    /*css可以分为两种方式：通过js直接嵌入html
    {
      test: /\.less$/, 
      loader: 'style-loader!css-loader!less-loader'
    },
    另一种如下，将css打包成一个文件再引用*/
    {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
    },
    //图片之类的文件进行处理和保存
    {
　　　 test: /\.(png|jpg|gif)$/,
　　　 loader: 'url-loader?limit=8192&name=assets/images/[name].[ext]'
　　}
    ]
  },
  plugins:[
    //css打包文件
    new ExtractTextPlugin('styles.css'),
    //公有方法独立打包
    new webpack.optimize.CommonsChunkPlugin({name:"common", filename:"common.bundle.js"})
  ],
  devServer:{
      //webpack服务器设置，端口
      port:8888,
      //设置代理
      proxy: {  
        '/api/*': {  
          target: 'http://localhost:8080',  
          secure: false  
        }  
      }  
  }
}