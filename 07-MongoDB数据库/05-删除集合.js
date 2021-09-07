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
//删除匹配的单个记录
//会输出删除的记录
User.findOneAndDelete({age:13}).then((res) =>console.log(res))
//删除多条文档(这里这样写会删除所有的记录)
User.deleteMany({}).then((res) =>console.log(res))