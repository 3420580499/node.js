const template = require('art-template')
const path = require('path')
const views = path.join(__dirname,'index.art')
const html = template(views ,{
    users:[
        {
            name:"张三",
            age:20
        },
        {
            name:"李四",
            age:20
        },
        {
            name:"王五",
            age:20
        },
        {
            name:"赵六",
            age:20
        },
    ]
})
console.log(html)