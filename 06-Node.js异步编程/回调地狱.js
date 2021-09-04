//要求依次读取3个TXT文件
const fs = require('fs')
fs.readFile('./1.txt', 'utf-8', (error, result) => {
    console.log(result)
    fs.readFile('./2.txt', 'utf-8', (error, result) => {
        console.log(result)
        fs.readFile('./3.txt', 'utf-8', (error, result) => {
            console.log(result)
        })
    })
})
//可以使用用promise语法解决Node.js异步编程中回调地狱的问题