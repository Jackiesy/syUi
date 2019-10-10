const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")  //用来改写html的webpack插件
module.exports = {
    mode: "production", //如果正在开发配置成development,正在进行发布production
    entry: {
        index: "./lib/index.tsx"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"] //那些后缀需要支持的
    },
    output: {  // 输出
        path: path.resolve(__dirname, "dist/lib"),//绝对路径
        library: "SYUI",//库的名字
        libraryTarget: "umd" // 库的目标格式,umd兼容其他md的（核心代码用的if，else去区分特征）
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, //如何知道某个文件是tsx,正则表达式.是又特殊含义，所有以要反斜杠；？代表x可有可无；$代表tsx结尾的
                loader: "awesome-typescript-loader" //需要yarn add 安装
            }
        ]
    },
    plugins: [ //plugins关键字部分添加该插件的一个实例（plugins是一个数组，new一个插件即可）
        new HtmlWebpackPlugin({ //这个插件的作用是依据一个简单的模板，帮助生成最终的Html5文件，这个文件中自动引用了打包后的JS文件。每次编译都在文件名中插入一个不同的哈希值。
            template: 'index.html'
        })
    ],
    externals: {  // 外部的库,外部库
        "react": {
            commonjs: "react",
            commonjs2: "react",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "react-dom",
            root: "ReactDOM"
        }
    }

}