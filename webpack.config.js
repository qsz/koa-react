var path = require('path');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'public/build');
var PUBLIC_PATH = path.resolve(ROOT_PATH, 'public');

var webpack = require('webpack');


module.exports = {

    entry: __dirname + "/app/index.js",

    output: {
        path: BUILD_PATH,
        filename: 'bundle.js',
        chunkFilename: '[name].[chunkhash:5].chunk.js',
        publicPath: '/build/'
    },

    devServer: {
        contentBase: "./views",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true,             //实时刷新
        progress: true,
        hot:true
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: PUBLIC_PATH
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=40000'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/, //不需要处理的文件夹
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },

        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],

    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            routeComponents: "../../../components"
        }
    },

};


