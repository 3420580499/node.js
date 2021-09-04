const fs = require('fs')
let promise = new Promise((resolve, reject) => {
    fs.readFile('./1e.txt', 'utf-8', (error, result) => {
        if (error != null) {
            reject(error)
        } else {
            //这里就相当于调用了then里面的函数
            resolve(result)
        }
    })
})
promise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})