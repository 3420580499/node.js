const express =require('express')
const app = express()
app.get('/index',(req,res) =>{
    res.send(req.query)
})
app.listen(3000)
console.log('服务器启动成功')