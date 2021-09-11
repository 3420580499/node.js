const  express =require('express')
const app = express()
//app.use匹配所有的请求方式(get或者post)
//接收所有请求方式的中间件,第一个参数也可以写上路径,表示接收该路径的get方式和post方式 
//app.use('/request',(req,res,next)  
app.use((req,res,next) =>{
    console.log('请求走了app.use中间件')
    next()
})
app.get('/request',(req,res,next) =>{
    req.name='李四'
    console.log('请求走了request中间件')
    next()
})
app.get('/request',(req,res) =>{
    res.send(req.name)
})
app.listen(3000)
console.log("服务器连接成功")