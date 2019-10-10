const base = require("./webpack.config")
module.exports = Object.assign({},base,{
    mode: "production", //如果正在开发配置成development,正在进行发布production
    externals: {  // 外部的库,外部库,部署的时候才加
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
})