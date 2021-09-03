//用于创建网站服务器的模块
const http = require('http');
//获取url模块(用于解析请求参数)
const url = require('url')
//app对象就是服务器对象  
const app = http.createServer();
//当客户端有请求来的时候
app.on('request', (req, res) => {
    //获取请求方式
    //console.log(req.method)
    //为什么会输出两次get:因为还要请求一个图标

    //获取请求地址
    console.log(req.url)
    //获取请求报文信息
    console.log(req.headers)
    console.log(req.headers['accept'])
    //告诉浏览器响应体中的类型
    res.writeHead(200, {
        'content-type': "text/html;charset=utf8"
    })

    //get请求参数部分：
    //parse方法中第一个参数是要解析的URL地址
    //parse方法中第二个参数是TRUE表示将查询的参数解析成对象的形式
    //这里得到的是请求地址中的各种信息
    console.log(url.parse(req.url))
    //转化为对象的形式
    console.log(url.parse(req.url, true))
    //es6对象结构
    let { query, pathname } = url.parse(req.url, true);
    console.log(query.name);
    console.log(query.age);



    if (pathname == '/index' || pathname == '/') {
        res.end('welcom 中的 home')
    } else if (pathname == '/error') {
        res.end('error')
    }
    // if (req.url == '/index' || req.url == '/') {
    //     res.end('welcom 中的 home')
    // } else if (req.url == '/error') {
    //     res.end('error')
    // }



    // if (req.method == 'POST') {
    //     res.end('post')
    // } else if (req.method == 'GET') {
    //     res.end('get')
    // }

    //res.end('<h3>hello web</h3>')
})
//要监听的端口号
app.listen(3000);

//终端执行命令nodemon app.js
//因为我们的服务器是建立在自己的电脑上的，所以访问地址写http://localhost:3000,写自己电脑的IP地址

