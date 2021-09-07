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
//查询集合中的所有的文档(记录)
// User.find().then((res) =>console.log(res))
//根据条件查询,年龄为13的
//返回的是一个数组,因为find方法返回就是一个数组
//User.find({age:13}).then((res) =>console.log(res))
//返回的是一个对象,默认返回集合的第一条文档
//User.findOne({age:13}).then((res) =>console.log(res))
//查询年龄大于20和小于30的
//User.findOne({age:{$gt:20,$lt:30},}).then((res) =>console.log(res))
//只查询查询出name字段和age字段
//不想查询_id就在前面加上-
User.find().select("name age -_id").then((res) =>console.log(res))
//查询爱好包含足球的
// User.findOne({hobby:{$in:"足球"}}).then((res) =>console.log(res))
//查询结果按年龄排序
// User.find().sort("age").then((res) =>console.log(res))
//skip表示跳过多少行,limit表示查询多少行
// User.find().skip(1).limit(2).then((res) =>console.log(res))


