//引入router模块
const getRouter = require ('router')
//获取路由对象
const router = getRouter()
router .get('/test',(req,res) => {
    res.end('hello ,this is router test')
})
router .post('/test',(req,res) => {
    res.end('hello ,this is router test')
})
const http = require('http')
const app =http.createServer();
app.on('request',(req,res)=>{
    router(req,res,() =>{

    })
})
app.listen(3000)