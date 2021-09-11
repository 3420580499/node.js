const express =require('express')
//创建路由对象
const login = express.Router()
//路径为/login/real
login.get('/real',(req,res) =>{
    res.send('欢迎登录')
})
module.exports = login