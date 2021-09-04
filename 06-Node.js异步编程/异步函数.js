//1.在普通函数定义前面加上async关键字，普通函数就变成了异步函数
//2.在异步函数中默认返回值是一个promise对象
//3.在异步函数内部使用throw关键字进行错误的抛出
//4.在异步函数中内部使用return进行结果返回，结果会包裹在promise对象中，return关键字代替了resolve方法

//await关键字
//1.它只能出现在异步函数中
//2.await 后跟promise对象，它可以暂停异步函数的执行，等待promise返回结果
async function fn() {
    //这里throw，后面代码就不执行了,可以用catch获取
    throw '发生了异常'
    return 123;
}
//console.log(fn())
fn().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})


async function p1() {

    return p1;
}

async function p2() {

    return p2;
}

async function p3() {

    return p3;
}
async function run() {
    let r1 = await p1()
    let r2 = await p2()
    let r3 = await p3()
    console.log(r1)
    console.log(r2)
    console.log(r3)
}
run()

