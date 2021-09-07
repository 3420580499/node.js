const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/playground")
    .then(() => console.log("数据库连接成功"))
    .catch(error => console.log(error,'数据库连接失败'))
const rule =  new mongoose.Schema({
    name: String,
    email:String,
    age:Number,
    hobby:[String],
    password:String
});
const User = mongoose.model('User',rule) //相当于一张表,表的名称是courses,规定变为这样的
//修改单条记录
//User.updateOne({name:"赵六"},{name:"赵六儿子"}).then((res) =>console.log(res))
//更新多条记录(这里表示将所有的记录的age改为56
User.updateMany({},{age:56}).then((res) =>console.log(res))