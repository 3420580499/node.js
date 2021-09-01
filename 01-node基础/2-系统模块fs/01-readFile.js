// 1.通过模块的名字fs对模块进行引用
const fs = require('fs')
//2.通过模块内部的readfile读取文件内容
//readFile中文件路径相当于命令行工具中的当前工作目录，他不是固定的‘2-系统模块fs’,使你使用node命令前命令行的路径
fs.readFile('./text', 'utf-8', (error, doc) => {
    //如果文件读取出错error是一个对象，包含错误信息
    //如果文件读取正确，error是null
    //doc是文件读取的结果
    console.log(error)
    console.log(doc)
})