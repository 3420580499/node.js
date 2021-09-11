const express =require('express')
const path = require('path')
const app = express()
//只要是基于public下的静态文件都能访问到,而不是去找loclhost:3000/add.html
app.use(express.static(path.join(__dirname,'public')))
app.listen(3000)
console.log('服务器启动成功')