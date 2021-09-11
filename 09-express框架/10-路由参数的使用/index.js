const express =require('express')
const app = express()
app.get('/index/:id/:name',(req,res) =>{
    //这个:id就是路由参数
    //路径为/index/122/张三
    //{"id":"122","name":"张三"}
    res.send(req.params)
})
app.listen(3000)
console.log('服务器启动成功')