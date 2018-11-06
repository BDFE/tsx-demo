const package = require("./package.json");
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: "./src/index.tsx",
    output: {
        filename: "index.js",
        path: __dirname + "/dist"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", "jsx"],
        modules: ['node_modules', path.resolve(__dirname, 'src/app')],
        alias: {
            'static': path.join(__dirname, "src/static"),
            'config': path.join(__dirname, "src/app/config"),
            'components': path.join(__dirname, "src/app/components"),
            'common': path.join(__dirname, "src/app/common"),
        }
    },
    devServer: {
        contentBase: './', //dist
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
            }
        ]
    },

};