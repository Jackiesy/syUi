const base = require("./webpack.config")
const HtmlWebpackPlugin = require("html-webpack-plugin")  //用来改写html的webpack插件
module.exports =Object.assign({},base, {
     mode: "development", //如果正在开发配置成development,正在进行发布production
     plugins: [ //plugins关键字部分添加该插件的一个实例（plugins是一个数组，new一个插件即可）
        new HtmlWebpackPlugin({ //这个插件的作用是依据一个简单的模板，帮助生成最终的Html5文件，这个文件中自动引用了打包后的JS文件。每次编译都在文件名中插入一个不同的哈希值。
            template: 'index.html'
        })
    ],
})