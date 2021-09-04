console.log('one')
setTimeout(() => {
    console.log('two')
}, 2000)
console.log('three')

//异步代码并不会阻塞后面的代码执行
//系统会先去执行同步代码，异步代码最后执行(只有0秒延迟的也是后执行)
//读取文件的fs.readFile()也是异步代码
//事件监听也是异步API