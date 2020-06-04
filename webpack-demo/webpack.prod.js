const path = require('path') //node的path模块
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    mode: 'production', //模式  development开发模式，production 生产模式 代码会被压缩
    entry: path.join(__dirname, 'src', 'index.js'), //join():路径拼接;  __dirname:当前路径
    output:{
        filename:'bundle.[contenthash].js',
        path:path.join(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader:["babel-loader"],
                include: path.join(__dirname, 'src'),
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename:'index.html'
        })
    ],
    
}