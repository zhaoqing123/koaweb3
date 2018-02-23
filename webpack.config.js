var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry:{
    	'comjs':__dirname + '/public/scripts/common.js',
    	'index':__dirname + '/public/scripts/index.es'
    } ,  //入口文件
    output:{
        path: __dirname + '/build/public/',   //打包好的文件夹
        publicPath:'',
        filename: 'scripts/[name].bound.js' //打包好的文件名
    },
    module:{
        rules: [{
	            test: /(\.es)$/,
	            use:{
	            	loader: 'babel-loader'
	            },
	            exclude: path.resolve(__dirname, 'node_modules') //编译时，不需要编译哪些文件
        	},{
	        	test: /\.css/,
	        	use:ExtractTextPlugin.extract({
	        		fallback:"style-loader",
	        		use:[{
	        			loader:"css-loader"
	        		}]
	        	}),
	        	exclude: path.resolve(__dirname, 'node_modules')
        	}]
    },
    plugins: [
    	new ExtractTextPlugin({
			filename: "css/[name].css",
			disable: false,
			allChunks: true
		}),
        new HtmlWebpackPlugin({
        	filename:__dirname+'/build/public/views/index.html',
        	template:__dirname+'/public/views/index.html',
        	inject:'true'
        }),
        new HtmlWebpackPlugin({
        	filename:__dirname+'/build/public/views/layout.html',
        	template:__dirname+'/public/views/layout.html',
        	chunks:[],
        }),
        // new webpack.optimize.OccurrenceOrderPlugin(),
        new UglifyJsPlugin()
	]
 }