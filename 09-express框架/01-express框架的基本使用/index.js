//引入express
const  express =require('express')
//创建网站服务器
const app = express()
app.get('/hello',(req,res) =>{
    //send方法的作用
    //send方法内部会检测响应内容的类型
    //send方法会自动设置http状态码
    //send方法会帮我们自动设置响应的内容类型及编码
  res.send('你好')
})
app.get('/obj',(req,res) =>{
  res.send({
      name:'李四',
      age:12
  })
})
app.listen(3000)
console.log("服务器连接成功")