const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/playground")
    .then(() => console.log("数据库连接成功"))
    .catch(error => console.log(error,'数据库连接失败'))
//用户集合(这是一个作者)
const Person = mongoose.model("Person",new mongoose.Schema({
   name:String

}))
//文章集合(这是一个作者写的书)
const Page = mongoose.model("Page",new mongoose.Schema({
   title:String,
   author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Person'
    }
}))
//联合查询
//Person.create({name:"zs"})
 //    .then((res) => console.log(res))
//Page.create({title:'第一章',author:'6137633223bf4f9bb0c196ed'})     .then((res) => console.log(res))
//我们要查询这本书,并且把这本书的作者的名字也显示出来
Page.find().populate('author').then((res) => console.log(res))
