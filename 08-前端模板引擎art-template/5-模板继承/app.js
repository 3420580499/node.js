const template = require('art-template')
const path = require('path')
const views = path.join(__dirname,'index.art')
const html = template(views ,{
            name:"张三",
            age:23
})
console.log(html)
//{{extend './father.art' }}
//相当于index.art继承了father.art,但是father有两个空缺的地方,我们在index.art中把它们填补上去