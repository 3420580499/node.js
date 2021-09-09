//当前文件夹下面没有,会去父文件夹中去找node_modules
const mongoose = require('mongoose')
const http = require('http')
const url = require('url')
const app = http.createServer()
//连接数据库
mongoose.connect("mongodb://localhost/example")
    .then(() => console.log("数据库连接成功"))
    .catch(() => console.log("数据库连接失败"))
//创建集合的规则
const rule =new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    age:{
        type:Number,
        minLength:1,
        maxLength:100
    },
    hobbies:{
        type:[String]
    },
    email:{
        type:String
    },
    password:{
        type:String
    }

})
const User = mongoose.model('User',rule)
app.on('request',async (req,res) =>{
    //请求方式
    const method = req.method;
    //请求地址
    let { pathname } = url.parse(req.url, true);
    if(method === "GET"){
        if(pathname === '/list'){
            const html1 = `
                    <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <title>Title</title>
                            <link rel="stylesheet" href="./add.css">
                        </head>
                        <body>
                        <button><a href="">添加用户</a></button>
                        <!--cellspacing表示单元格之间的距离-->
                        <table cellspacing="0">
                            <thead >
                                <tr>
                                    <th>用户名</th>
                                    <th>年龄</th>
                                    <th>爱好</th>
                                    <th>邮箱</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>`
                     let html2= ``
            let users =await User.find()
            users.forEach((item) =>{
                html2+= `
                            <tr>
                                <td>${item.name}</td>
                                <td>${item.age}</td>
                                <td>收到货积分</td>
                                <td>${item.email}</td>
                                <td>
                                    <button style="height: 30px;width: 40px;background-color:  #db6049;margin-left: 0"><a href="">删除</a></button>
                                    <button style="height: 30px;width: 40px;background-color: #5aa45c;margin-left: 0"><a href="">修改</a></button>
                                </td>
                            </tr>`
            })

            const html3=    `
                            </tbody>
                        </table>
                        </body>
                        </html>
            `
            res.end(html1+html2+html3)
        }else if(pathname === '/add.css'){
            const addCss = `*{
                                padding: 0;
                                margin: 0;
                            
                            }
                            a{
                                text-decoration: none;
                                color: #fff;
                            }
                            button {
                                margin-left: 20px;
                                border: 0;
                                border-radius: 3px;
                                width: 79px;
                                height: 35px;
                                background-color: #2a75b9;
                            }
                            table{
                                text-align: center;
                                width:1000px;
                                margin-left: 20px;
                                margin-top: 20px;
                            }
                            th,td{
                                line-height: 40px;
                                border: 1px solid #e9ebe8;
                                /*合并两条相邻的边框*/
                                border-collapse: collapse;
                            }`
            res.end(addCss)
        }
    }else if (method === "POST"){{

    }}
})
app.listen(3000)
