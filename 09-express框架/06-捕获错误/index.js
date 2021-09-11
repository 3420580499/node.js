const fs = require('fs')
const  express =require('express')
const promisify= require('util').promisify
const app = express()
const readFile = promisify(fs.readFile)
app.get('/get',async (req,res,next) =>{
   try{
       await readFile('a.js')
   }catch(err){
       next(err)
   }
})
//错误处理中间件
app.use((error,req,res,next) =>{
   res.status(500).send(error.message)
})
app.listen(3000)
console.log("服务器连接成功")