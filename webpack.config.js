var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');//用来分离打包css
var HtmlWebpackPlugin = require('html-webpack-plugin'); //用来生成html

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/app.js'),
    vendor:['react','react-dom','react-router','redux','react-redux','jquery']
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
        presets: ['es2015','react'],
        //antd的按需加载插件babel-plugin-import,style为true则用less
        plugins: [
          ["import", { "libraryName": "antd", "style": "css"}],
          "transform-runtime"
        ]
      }
    },
    /*css可以分为两种方式：通过js直接嵌入html
    {
      test: /\.less$/, 
      loader: 'style-loader!css-loader!less-loader'
    },
    另一种如下，将css打包成一个文件再引用*/
    {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
    },
    {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
    },
    //图片之类的文件进行处理和保存
    {
　　　 test: /\.(png|jpg|gif|ico)$/,
　　　 loader: 'url-loader?limit=8192&name=assets/images/[name].[ext]'
　　}
    ]
  },
  plugins:[
    //css打包文件
    new ExtractTextPlugin('styles.css'),
    //公有方法独立打包
    new webpack.optimize.CommonsChunkPlugin({name:"vendor", filename:"vendor.bundle.js"}),
    //生成入口网页
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'app/app.html'),
      hash:true
    })
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