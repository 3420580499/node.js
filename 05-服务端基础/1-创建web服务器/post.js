//post方式的请求参数
const http = require('http')
//专门处理请求参数的模块(usernam=user&age=12处理这种格式的字符串的)
const querystring = require('querystring')
const app = http.createServer();
let postParams = '';
//由于post方式的请求参数是在请求体中的，不能直接通过url的方式获取
//给请求对象绑定两个事件
//data 当请求参数传递的时候触发data事件
//end 当请求参数传递完成的时候触发end事件
app.on('request', (req, res) => {
    req.on('data', params => {
        //将参数拼接起来
        //usernam=user&age=12
        postParams += params;
    })
    req.on('end', () => {
        console.log(querystring.parse(postParams))
    })
    res.end('ok')
})
app.listen(3000)

//获取post请求参数
//1.参数被放置在请求体中进行传输
//2.获取post参数需要使用到data事件和end事件
//3.使用querystring系统模块将参数转换为对象格式