const fs = require('fs')
const  express =require('express')
const app = express()
app.get('/get',(req,res,next) =>{
   //throw new Error('请求发生了错误')
   //异步:读取文件发生了错误
   fs.readFile('../app.js','utf8',(error,result) =>{
       if(error != null){
           //要将error信息传进去
          next(error)
       }else {
          console.log(result)
       }
   })
})
//错误处理中间件
app.use((error,req,res,next) =>{
    //console.log(error.message)
   res.status(500).send(error.message)
})
app.listen(3000)
console.log("服务器连接成功")