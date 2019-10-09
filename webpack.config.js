const path = require("path")
module.exports={
    mode:"production", //如果正在开发配置成development,正在进行发布production
    entry: {
        index:"./lib/index.tsx"
    },
    output: {  // 输出
        path: path.resolve(__dirname,"dist/lib") ,//绝对路径
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

    }

}