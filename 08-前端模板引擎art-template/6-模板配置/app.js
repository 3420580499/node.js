const template = require('art-template')
const path = require('path')
const dateFormat = require('dateformat')
//设置模板的根目录
template.defaults.root=path.join(__dirname)
// const views = path.join(__dirname,'index.art')
//导入模板变量(向模板中导入变量,此处dateFormat是一个处理日期的方法)
template.defaults.imports.dateformat = dateFormat
//有了根目录,这里就只要写文件名就行,会在前面拼上根目录
//配置模板的默认后缀,后面可以省略后缀了,要是写一个index.html,回去找index.html,不会再拼上后缀
template.defaults.extname='.art'
const html = template('index' ,{
        time :new Date()   
})
console.log(html)