const package = require("./package.json");
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.join(__dirname, ''), //src
    mode: 'development',
    entry: {
        app: "./src/index.tsx",
        // appStyles: './css/site.css',
        vendor: [
            'react',
            'react-dom',
        ],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", "jsx"],
        modules: ['node_modules', path.resolve(__dirname, 'src')],
        alias: {
            'static': path.join(__dirname, "src/static"),
            'config': path.join(__dirname, "src/app/config"),
            'components': path.join(__dirname, "src/app/components"),
            'common': path.join(__dirname, "src/app/common"),
        }
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'), //dist
        inline: true, // false 不实时刷新
        port: 8001,
        proxy: {
            "/transportcontrol": {
                target: "http://cp01-jiaotongyun-5.epc.baidu.com:8006",
                pathRewrite: {
                    "": ""
                }
            },
        },
        allowedHosts: ['baidu.com', 'localhost.jiaotong.baidu.com']
    },
    // watchOptions: {
    //     poll: 1000,//监测修改的时间(ms)
    //     aggregeateTimeout: 500, //防止重复按键，500毫米内算按键一次
    //     ignored: /node_modules/,//不监测
    // },
    module: {
        rules: [
            {
                test: /\.tsx?$/, loader: "awesome-typescript-loader"
            },
            {
                test: /\.jsx?$/, loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader"
                ],
            },
            // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
            // Using here url-loader and file-loader
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/img/[name].[ext]?[hash]'
                }
            },
        ]
    },
    devtool: 'inline-source-map',
    //插件，用于生产模版和各项功能 
    plugins: [
        // new uglify(),  //js压缩插件 
        new HtmlWebpackPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true //removeAttrubuteQuotes是却掉属性的双引号。
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。 
            template: './src/index.html', //是要打包的html模版路径和文件名称。 
            hash: true,
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
    ],
};