const mongoose = require('mongoose')
//创建数库路连接
mongoose.connect('mongodb://localhost/playground')
.then(() => console.log('数据库连接成功 '))
.catch(() => console.log('数据库连接失败'))