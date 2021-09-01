// 1.通过模块的名字fs对模块进行引用
const fs = require('fs')
//2.通过模块内部的writefile写入文件内容
fs.writeFile('./text', '写入文件的内容', error => {
    //如果文件写入出错error是一个对象，包含错误信息
    //如果文件写入正确，error是null
    console.log(error)
})