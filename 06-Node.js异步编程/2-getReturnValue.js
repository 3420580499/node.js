function getMsg() {
    setTimeout(function () {
        return {
            msg: "zs"
        }
    }, 2000)
    // return undefined
}
const msg = getMsg();
//因为异步代码不会阻塞后面的代码执行，getMsg方法后面默认返回一个undefined
console.log(msg) //undefined




//可以通过回调函数拿到值
function getMsg2(callback) {
    setTimeout(function () {
        callback({
            msg: "zs"
        })
    }, 2000)
    // return undefined
}
//调用callback函数就相当于调用了function(obj)函数
getMsg2(function (obj) {
    console.log(obj)
})