//使用子模板可以将网站的公共区块抽离到单独的文件中
//标准语法:{{include '模板地址'}}
//原始语法:<%include('模板地址')%>
const template = require('art-template')
const path = require('path')
const views = path.join(__dirname,'index.art')
const html = template(views ,{
            name:"张三",
            age:23
})
console.log(html)