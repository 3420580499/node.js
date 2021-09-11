const express =require('express')
const path = require('path')
const app = express()
//将变量设置到app.locals对象下,所有的模板都可以访问到
app.locals.users=[
    {
        name:"张三",
        age:12
    },
    {
        name:"李四",
        age:23
    }
]
//告诉express使用什么模板引擎还有使用什么后缀(.art)
app.engine('art', require('express-art-template'))
//告诉express模板的位置在哪
app.set('views',path.join(__dirname,'views'))
//告诉express模板引擎使用什么后缀
app.set('view engine','art')
app.get('/index',(req,res) =>{
    //reder函数的作用
    //1.拼接模板路径
    //2.拼接模板后缀
    //3.哪一个模板和哪一个数据进行拼接 
    //4.将拼接的结果响应给客户端
    res.render('add',{
        message:'message'
    })
})
app.listen(3000)
console.log('服务器启动成功')