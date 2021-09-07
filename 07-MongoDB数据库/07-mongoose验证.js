const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/playground")
    .then(() => console.log("数据库连接成功"))
    .catch(error => console.log(error,'数据库连接失败'))
const rule =  new mongoose.Schema({
   //这里可以添加字段的验证,用户输入不符合的字段会拦截下来
    name:{
        type:String,
        //必须要填
        //否则打印出后面的错误信息
        require:[true,"此字段必须要填"],
        minLength:[2,"最小长度为2"],
        maxLength:[10,"最大长度为10"],
        //取出前后的空格
        trim:true
    },
    age:{
        type:Number,
        min:2,
        max:100
    },
    date:{
        type:Date,
        //默认值是当前系统的时间
        default:Date.now,
    },
    hobby:{
        type:String,
        //枚举值列出这个字段填的东西必须是这里面的某个
        enum:{
            values:["html","css","js","ts","node.js","vue.js"],
            message:"枚举值列出这个字段填的东西必须是这里面的某个"
        }

    },
    //自定义的验证
    ziDingYi:{
        type:String,
        validate:{
            validator: v =>{
                return v.length>2 && v.length<20
            },
            message:"填的内容不符合自定义验证"
        },

    }
});
const PostPage = mongoose.model('PostPage',rule) //相当于一张表,表的名称是courses,规定变为这样的
// PostPage.create({name:" 犬"})
//    .then((res) => console.log(res))
//    .catch ((error) =>console.log(error))
// PostPage.create({name:"动力",age:12})
//     .then((res) => console.log(res))
//     .catch ((error) =>console.log(error))
PostPage.create({name:"机器人",age:12,hobby:'html5',ziDingYi:'w'})
    .then((res) => console.log(res))
    .catch ((error) => {
        const errors = error.errors
        for(let i in errors){
            // console.log(errors[i].message);
            console.log(errors[i]['message']);
        }
    })