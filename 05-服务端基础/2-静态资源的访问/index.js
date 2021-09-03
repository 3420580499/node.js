const http = require('http')
const url = require('url')
const fs = require('fs')
//用于拼接路径的模块
const path = require('path')
//该模块课用于获取路径对应的文件类型，通过npm install mime安装
const mime = require('mime')
const app = http.createServer()
app.on('request', (req, res) => {
    //获取用户的请求路径
    let pathname = url.parse(req.url).pathname
    pathname = pathname == '/' ? '/index.html' : pathname
    //将用户的请求路径转换为实际的服务器硬盘路径
    let realpath = path.join(__dirname, "public", pathname)
    //确定响应体文件的类型
    let type = mime.getType(realpath)
    fs.readFile(realpath, (error, result) => {
        //如果文件读取失败
        if (error != null) {
            res.writeHead(404, {
                'content-type': "text/html;charset=utf8"
            })
            res.end('文件读取失败')
            return
        }
        res.writeHead(200, {
            //动态改变type,你请求了index.html,但HTML中会请求css,js等文件，其实浏览器已经
            // 发送了多个请求,每次请求得到的结果类型不一样的，因为是高级浏览器，不写也没关系
            'content-type': type
        })
        res.end(result)
    })
})
app.listen(3000)