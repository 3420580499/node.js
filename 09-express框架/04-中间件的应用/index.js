const  express =require('express')
const app = express()
// app.use((req,res,next) =>{
//     res.send('服务器正在维护,请稍后登录')
// })
app.use('/login',(req,res,next) =>{
    let flag =false
    if(flag){
        next()
    }else{
        res.send('你还未登录')
    }
})
app.get('/login',(req,res) =>{
    res.send('欢迎来到首页')
})
//但请求走到这里是,说明没有对应的路由,请求地址有问题
app.use((req,res,next) =>{
    //还可以为客户端响应404

    res.status(404).send('没有对应的路由,请求地址有问题')
})
app.listen(3000)
console.log("服务器连接成功")