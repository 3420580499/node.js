const mongoose = require('mongoose')
//创建集合规则
const rule = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:2,
        maxlength:10
    },
    age:{
        type:Number,
        min:10,
        max:100
    },
    sex:{
        type:String
    },
    email:{
        type:String
    },
    hobbies:[String],
    collage:String,
    enterDate:{
        type:Date,
        default:Date.now
    }

})
//创建集合
const Student = mongoose.model('Student',rule)
module.exports= Student