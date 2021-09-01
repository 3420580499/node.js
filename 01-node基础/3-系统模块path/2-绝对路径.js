const path = require('path')
//require中的相对路径就是当前文件
const fs = require('fs')

//readFile中文件路径相当于命令行工具中的当前工作目录，他不是固定的‘3-系统模块path’,使你使用node命令前命令行的路径
fs.readFile(path.join(__dirname, './text1'), 'utf-8', (error, doc) => {
    console.log(error)
    console.log(doc)
})
// PS C:\node.js学习\01-node基础> node ./3-系统模块path/2-绝对路径.js