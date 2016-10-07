/**
 * Created by linww on 2016/10/1.
 */
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;
var isDev = ENV === 'build'
var isTest = ENV === 'watch';
var isProd = ENV === 'dist';

// 定义输出文件夹
var outputDir = './build';
// 定义开发文件夹
var entryPath = './src';

module.exports = function makeWebpackConfig(){

    /**
     * Config
     * 相关文档：http://webpack.github.io/docs/configuration.html
     * 这个是设置所有配置的对象
     */
    var config ={};

    /**
     * 入口
     * Reference: http://webpack.github.io/docs/configuration.html#entry
     * @type {{app: string}}
     */
    config.entry = {
        app:entryPath+'/app.js'
    }

    config.output ={
        path:outputDir,
        // Filename for entry points
        // Only adds hash in build mode
        filename: isProd ? '[name].[hash].js' : '[name].js',
    }

    // Initialize module
    config.module = {
        preLoaders: [],
        loaders:[
            {
                // JS LOADER
                // Reference: https://github.com/babel/babel-loader
                // Transpile .js files using babel-loader
                // Compiles ES6 and ES7 into ES5 code
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            { test:/\.css$/,loader:'style!css'},
            {
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url?limit=1024&name=img/[name].[ext]'
            },
            {
                test: /\.(woff2?|otf|eot|svg|ttf)$/i,
                loader: 'url?name=fonts/[name].[ext]'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    }

    config.plugins = [];

    config.plugins.push(
        new HtmlWebpackPlugin({
            title:'index',
            template: entryPath+'/index.html',
            inject: 'body'
        })
    )

    // if(isProd){
    //     config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    //         test:/\.js$/,
    //         compress:{
    //             warnings:false
    //         },
    //         output:{
    //             comments:false
    //         }
    //     }));
    // }

    /**
     * Dev server configuration
     * Reference: http://webpack.github.io/docs/configuration.html#devserver
     * Reference: http://webpack.github.io/docs/webpack-dev-server.html
     */
    config.devServer = {
        contentBase: outputDir,
        stats: 'minimal'
    };

    return config;
}();
