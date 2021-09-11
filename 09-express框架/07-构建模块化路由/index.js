const express =require('express')
const app = express()
const login = require('./login')
//创建路由对象
const home = express.Router()
app.use('/home',home)
app.use('/login',login)
//路径为/home/index
home.get('/index',(req,res) =>{
    res.send('欢迎来到首页')
})
app.listen(3000)
console.log('服务器启动成功')