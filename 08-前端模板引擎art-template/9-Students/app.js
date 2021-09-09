const getRouter = require('router')
const router = getRouter()
const path = require('path')
const serveStatic = require('serve-static')
const querystring = require('querystring')
const dateFormat = require('dateformat')

//引入静态资源访问模块
const serve = serveStatic(path.join(__dirname,'public'))
const http = require('http')
//引入模板引擎
const template = require('art-template')
//加入模板根路径
template.defaults.imports.dateformat = dateFormat
template.defaults.root = path.join(__dirname,'views')
require('./model/connect.js')
const app =http.createServer();
const Student = require('./model/student.js')
router.get('/add',(req,res) =>{
  const addHtml = template('add.art',{})
  res.end(addHtml)

})
router.get('/list',async (req,res) =>{
    let stus = await Student.find()
    const listHtml = template('list.art',{
        stus:stus 
    })
    res.end(listHtml)
})
router.post('/form', (req,res) =>{
    //post方式接受请求参数信息
    let formData = ''
    req.on('data',param =>{
        formData += param
    })
    req.on('end',() =>{
        
        Student.create(querystring.parse(formData))
        res.writeHead(301,{
            location:'/list'
        })
        res.end()
    })

})
app.on('request',(req,res)=>{
    router(req,res,() =>{

    })
    serve(req,res,() =>{

    })
})
app.listen(3000)
console.log('服务器启动成功')