const mongoose = require('mongoose')
//playground是数据库名称(没有该数据库的话,会帮你建)
mongoose.connect("mongodb://localhost/playground")
    .then(() => console.log("数据库连接成功"))
    .catch(error => console.log(error,'数据库连接失败'))
//创建集合的规则
const rule =  new mongoose.Schema({
    name: String,
    author: String,
    isSelect: Boolean
    //数组 hobby:[String]
});
//根据前面的规则来创建集合
//第一个参数是集合的名称
//第二个参数是集合的规则
const Course = mongoose.model('Course',rule) //相当于一张表,表的名称是courses,规定变为这样的
//当前的集合是空的,我们可以创建一个集合的实例(存在集合里面,就是第一行数据)
const course = new Course({
    name:"vue.js class",
    author:'zs',
    isSelect:true
})
//将创建的集合对象保存
//相当于插入数据
course.save()



//向数据库中插入数据的第二种方法
Course.create({name:"TypeScript", author:'ls', isSelect:false},
    (error,result) =>{
        console.log(error);
        console.log(result);
    })