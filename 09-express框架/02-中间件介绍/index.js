const  express =require('express')
const app = express()
//中间件
app.get('/request',(req,res,next) =>{
   req.name='张三'
   next()
})
app.get('/request',(req,res) =>{
   res.send(req.name)
 })
app.listen(3000)
console.log("服务器连接成功")