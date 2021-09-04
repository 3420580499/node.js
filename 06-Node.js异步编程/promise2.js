const fs = require('fs')
function p1() {
    return new Promise((resolve, reject) => {
        fs.readFile('./1.txt', 'utf-8', (error, result) => {
            if (error != null) {
                reject(error)
            } else {
                //这里就相当于调用了then里面的函数
                resolve(result)
            }
        })
    })
}
function p2() {
    return new Promise((resolve, reject) => {
        fs.readFile('./2.txt', 'utf-8', (error, result) => {
            if (error != null) {
                reject(error)
            } else {
                //这里就相当于调用了then里面的函数
                resolve(result)
            }
        })
    })
}
function p3() {
    return new Promise((resolve, reject) => {
        fs.readFile('./3.txt', 'utf-8', (error, result) => {
            if (error != null) {
                reject(error)
            } else {
                //这里就相当于调用了then里面的函数
                resolve(result)
            }
        })
    })
}
p1().then((result) => {
    console.log(result)
    return p2()
}).then((result) => {
    console.log(result)
    return p3()
}).then((result) => {
    console.log(result)
})
//后面可以使用异步函数的方式解决代码复杂的问题